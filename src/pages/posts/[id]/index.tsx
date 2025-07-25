import styled from "styled-components";
import MainMenu from "../../../shared/components/MainMenu";
import {
  getSlugMap,
  saveFile,
  getCacheData,
  getNotionSlugMapData,
  successFailureLogRecorder,
  getNotionMetaData,
  saveMDXComponent,
} from "../../../features/blog/services/notion";
import { GetStaticProps } from "next";

import { compileMdx } from "@/shared/notion/mdx";
import MDXRenderer from "@/features/blog/components/notion/MDXRenderer";
import { isExpired } from "@/shared/cache/ttl";

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

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-bottom: 200px;
  background-color: white;
  img {
    width: 100%;
  }
`;

export default function Detail({ source }: { source: any }) {
  return (
    <Wrapper>
      <MainMenu />
      <NotebookWrap>
        <Content>
          <MDXRenderer compiledCode={source} />
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

  if (cacheSlug) {
    const id = cacheSlug[slug];
    const currentMeta = cacheMeta[id];
    const resultTtl = isExpired(
      currentMeta.cache_generated_at,
      currentMeta.ttl
    );
    if (!resultTtl) {
      const compiled = getCacheData(`/public/cache/mdx/${id}.js`);
      if (compiled) {
        return { props: { source: compiled }, revalidate: 3600 };
      }
    }
  }

  const { slugMap, notionList } = await getSlugMap();

  const id = slugMap[slug];

  if (!id) return { notFound: true };

  const compiled = await compileMdx(id);
  const notion = notionList.find((item) => item.id === id);

  if (!notion) return { notFound: true };
  if (!compiled) return { notFound: true };

  const CACHE_TTL_SECONDS = 24 * 60 * 60; // 24시간
  const newMeta = getNotionMetaData(notion, CACHE_TTL_SECONDS);
  const newslug = getNotionSlugMapData(notion);

  const saveMeta = saveFile("public/cache", "metaData.json", newMeta);
  const saveSlug = saveFile("public/cache", "slugMap.json", newslug);
  const saveMdx = saveMDXComponent("public/cache/mdx", id + ".js", compiled);
  successFailureLogRecorder([saveMeta, saveSlug, saveMdx]);

  return {
    props: { source: compiled },
    revalidate: 60,
  };
};
