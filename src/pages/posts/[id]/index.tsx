import styled from "styled-components";
import MainMenu from "../../../shared/components/MainMenu";
import {
  getSlugMap,
  getNotionSlugMapData,
  getNotionMetaData,
  saveMDXComponent,
  getMarkdownFromNotionPage,
} from "../../../features/blog/services/notion";
import { GetStaticProps } from "next";

import { compileMdx } from "@/shared/notion/mdx";
import MDXRenderer from "@/features/blog/components/notion/MDXRenderer";
import { isExpired } from "@/shared/cache/ttl";
import {
  formatTimestampToDateStr,
  safeClone,
  successFailureLogRecorder,
} from "@/utils/common";
import { CacheMeta, Meta } from "@/types/cache";
import { getCacheData, saveFile, updateJSONFile } from "@/shared/cache/json";
import { usePageViewTracker } from "@/features/blog/hooks/notion/usePageViewTracker";
import { upsertDataFromFirestore } from "@/features/blog/api/firebase";
import { calculateReadingTime } from "@/features/blog/services";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  border-radius: 10px;
`;

const NotebookWrap = styled.div`
  height: 100%;
  min-height: 100vh;
  flex: 4;
  background-color: white;
  border-right: solid 1px rgba(0, 0, 0, 0.2);
`;

const SideMenuList = styled.div`
  flex: 2;
  width: 300px;
  height: 100%;
  /* background: yellow; */
`;

const getImageUrl = (src: string) => `${src ? src : "/blank-profile.svg"}`;
const UserImg = styled.div<{ src: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${(props) => getImageUrl(props.src)});
  background-size: cover;
  background-position: center;
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-bottom: 200px;
  background-color: white;
  img {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
`;
const Date = styled.p`
  display: flex;
  gap: 10px;

  font-size: 14px;
  opacity: 0.5;
`;

type PropsType = { meta: Meta; compiled: string };
export default function Detail({ meta, compiled }: PropsType) {
  const { views } = usePageViewTracker({ pageId: meta.id });

  return (
    <Wrapper>
      <MainMenu />
      <NotebookWrap>
        <Content>
          <Title>{meta.title}</Title>
          <Date>
            <span>
              작성 일자: {formatTimestampToDateStr(meta.created_time)}
            </span>
            /
            <span>
              업데이트 일자: {formatTimestampToDateStr(meta.last_edited_time)}
            </span>
          </Date>
          <Date>읽기 시간: {meta.reading_time || 1}분</Date>
          <Date>조회수: {meta.properties.views || 0}</Date>
          <MDXRenderer compiledCode={compiled} />
        </Content>
      </NotebookWrap>
      <SideMenuList />
    </Wrapper>
  );
}

export const getStaticPaths = async () => {
  const cachePath = getCacheData("/public/cache/slugMap.json");
  if (Object.keys(cachePath).length > 0) {
    return {
      paths: Object.keys(cachePath).map((slug) => ({ params: { id: slug } })),
      fallback: "blocking",
    };
  }
  const { slugMap } = await getSlugMap();
  return {
    paths: Object.keys(slugMap).map((slug) => ({ params: { id: slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: slug } = params as any;

  const cacheSlug = getCacheData("/public/cache/slugMap.json");
  const cacheMeta = getCacheData("/public/cache/metaData.json");

  if (cacheSlug && cacheMeta) {
    const id = cacheSlug[slug];
    const { views } = await upsertDataFromFirestore(id, "properties");

    const currentMeta = cacheMeta[id];
    currentMeta.properties.views = views;
    if (currentMeta) {
      const resultTtl = isExpired(
        currentMeta.cache_generated_at,
        currentMeta.ttl
      );
      if (!resultTtl) {
        const compiled = getCacheData(`/public/cache/mdx/${id}.js`);
        if (compiled) {
          return {
            props: { meta: currentMeta, compiled },
            revalidate: 3600,
          };
        }
      }
    }
  }

  const { slugMap, notionList } = await getSlugMap();

  const id = slugMap[slug];

  if (!id) return { notFound: true };

  const { compiled } = await compileMdx(id);
  const notion = notionList.find((item) => item.id === id);

  if (!notion) return { notFound: true };
  if (!compiled) return { notFound: true };

  const CACHE_TTL_SECONDS = 24 * 60 * 60; // 24시간
  const { views } = await upsertDataFromFirestore(id, "properties");
  const newMeta = getNotionMetaData(notion, CACHE_TTL_SECONDS);
  newMeta[id].properties.views = views;
  const newslug = getNotionSlugMapData(notion);

  const saveMeta = saveFile("public/cache", "metaData.json", newMeta);
  const saveSlug = saveFile("public/cache", "slugMap.json", newslug);
  const saveMdx = saveMDXComponent("public/cache/mdx", id + ".js", compiled);
  successFailureLogRecorder([saveMeta, saveSlug, saveMdx]);
  const notionPage = await getMarkdownFromNotionPage(notion.id);

  const readingTime = calculateReadingTime(notionPage);
  updateJSONFile<CacheMeta>("/public/cache/metaData.json", (data) => {
    const newData = safeClone(data);
    newData[id].reading_time = readingTime;
    return newData;
  });
  return {
    props: { meta: { ...newMeta[id], reading_time: readingTime }, compiled },
    revalidate: 60,
  };
};
