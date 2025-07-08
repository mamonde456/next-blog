import { NotionType } from "@/features/blog/api/notion/type";
import { getMarkdownFromNotionPage } from "../../../src/features/blog/services/notion";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export const formatterMDX = async (id: string) => {
  const mdString = await getMarkdownFromNotionPage(id);
  const mdxResult = await serialize(mdString || "", {
    mdxOptions: {
      format: "mdx",
      remarkPlugins: [remarkGfm, remarkBreaks],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [
          rehypePrettyCode,
          ,
          {
            theme: "github-light",
          },
        ],
      ],
    },
    parseFrontmatter: false,
  });
  return mdxResult;
};

export const updateFormatMDX = (
  notion: NotionType,
  mdx: MDXRemoteSerializeResult
) => {
  if (!notion)
    return new Error("saveFormatMDX: notion 데이터를 찾을 수 없습니다.");
  const metaData = {
    notion: {
      created_time: notion.created_time,
      last_edited_time: notion.last_edited_time,
      in_trash: notion.in_trash,
    },
    update_time: new Date().toISOString(),
  };
  const content = {
    metaData,
    mdx,
  };
  return content;
};
