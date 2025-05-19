import styled from "styled-components";
import MainMenu from "@/shared/components/MainMenu";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import {
  getMarkdownFromNotionPage,
  getSlugMap,
} from "@/features/blog/services/notion";
import { GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import PageLoader from "@/components/ui/loader/PageLoader";
import { getNotionPage, getNotionPageBlocks } from "@/features/blog/api/notion";
import CodeSlot from "@/components/blog/CodeSlot";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import {
  getCacheData,
  replaceCodeFormat,
  saveJSON,
} from "@/features/blog/services/notion";
import { getMdxFile } from "@/features/blog/api/public";

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

const Title = styled.div`
  padding: 40px;
  font-size: 42px;
  color: black;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  margin-bottom: 40px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 18px;
  }
`;
const PostsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
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

const NotionComponents = styled.div``;

const BtnContainer = styled.div`
  display: flex;
  justify-content: right;
  /* padding: 20px 30px; */
  padding: 10px 0px;
  gap: 10px;
`;
export default function Detail({ source }: { source: any }) {
  useEffect(() => {
    console.log(source);
  }, []);
  return (
    <Wrapper>
      <MainMenu />
      <NotebookWrap>
        <Content>
          {source && (
            <MDXRemote
              {...source}
              components={{
                img: ({ src, alt }) => (
                  <Image
                    src={src || ""}
                    alt={alt || ""}
                    width={800}
                    height={500}
                    loading="lazy"
                  />
                ),
                CodeSlot,
              }}
            />
            // <MDXRemote {...source} />
          )}
        </Content>
      </NotebookWrap>
      <SideMenuList />
    </Wrapper>
  );
}

export const getStaticPaths = async () => {
  const slugMap = await getSlugMap();

  return {
    paths: Object.keys(slugMap).map((slug) => ({ params: { id: slug } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: slug } = params as Params;
  const slugMap = await getSlugMap();
  const id = slugMap[slug];
  // const results = await getNotionPageBlocks(id);
  // const x = await getMarkdownFormNotionBlocks(results);
  if (!id) return { notFound: true };

  const mdxFile = getCacheData(`/public/mdx/${id}.mdx`);
  if (mdxFile) {
    return {
      props: { source: mdxFile },
      revalidate: 60,
    };
  }

  const mdString = await getMarkdownFromNotionPage(id);
  // const a = replaceCodeFormat(mdString, id);
  const mdxResult = await serialize(mdString || "", {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkBreaks],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [rehypePrettyCode, { theme: "github-light" }],
      ],
    },
  });
  saveJSON("public/mdx", id + ".mdx", mdxResult);

  return {
    props: { source: mdxResult },
    revalidate: 60,
  };
};
