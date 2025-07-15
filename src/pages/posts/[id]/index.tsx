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
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { useState } from "react";
import { compileMdx } from "@/shared/notion/mdx";
import MDXRenderer from "@/features/blog/components/notion/MDXRenderer";

const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* margin-top: 0.8%; */
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

type MDXContentType = {
  metaData: Record<string, string>;
  mdx?: MDXRemoteSerializeResult;
};

export default function Detail({ source }: { source: any }) {
  const [mdxContent, setMdx] = useState();

  return (
    <Wrapper>
      <MainMenu />
      <NotebookWrap>
        <Content>
          <MDXRenderer compiledCode={source} />
          {/* {source && (
            <MDXRemote
              {...source}
              components={{
                img: ({ src, alt }) => (
                  <Image
                    src={src || ""}
                    alt={alt || ""}
                    width={800}
                    height={500}
                  />
                ),
              }}
            />
          )} */}
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

  if (cacheSlug) {
    const id = cacheSlug[slug];
    const compiled = getCacheData(`/public/cache/mdx/${id}.js`);
    if (compiled) {
      return { props: { source: compiled }, revalidate: 3600 };
    }
  }

  const { slugMap, notionList } = await getSlugMap();

  const id = slugMap[slug];

  if (!id) return { notFound: true };

  const compiled = await compileMdx(id);
  const notion = notionList.find((item) => item.id === id);
  console.log(compiled);

  if (!notion) return { notFound: true };
  if (!compiled) return { notFound: true };

  const CACHE_TTL_SECONDS = 24 * 60 * 60; // 24시간
  const newMeta = getNotionMetaData(notion, CACHE_TTL_SECONDS);
  console.log(newMeta);
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
