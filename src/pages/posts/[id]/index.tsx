import path from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import MarkdownView from "react-showdown";

export default function detail({ data, content }: any) {
  return (
    <div>
      <MarkdownView
        markdown={content}
        options={{ tables: true, emoji: true }}
      ></MarkdownView>
      <div>
        <h3>Comments</h3>
        <>
          <ul>
            <li>hello</li>
          </ul>
        </>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const file = await fs.readdir(path.join("__post"));
  const paths = file.map((el) => ({
    params: { id: el.replace(/\.md$/, "") },
  }));
  console.log(paths);
  return { paths, fallback: false };
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
