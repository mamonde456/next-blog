import path from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function detail({ data, content }: any) {
  return (
    <div>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}

export const getStaticPaths = async () => {
  const file = await fs.readdir(path.join("__post"));
  const paths = file.map((el) => ({
    params: { id: el.replace(/\.md$/, "") },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }: any) => {
  const markdownWithMetadata = await fs.readFile(
    path.join(`__post/${params.id}.md`),
    "utf-8"
  );
  const { data, content } = await matter(markdownWithMetadata);
  return {
    props: {
      data,
      content,
    },
  };
};
