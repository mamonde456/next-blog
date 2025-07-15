import { NotionType } from "@/features/blog/api/notion/type";
import { getMarkdownFromNotionPage } from "../../../src/features/blog/services/notion";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { compile } from "@mdx-js/mdx";

export const compileMdx = async (id: string) => {
  const mdString = await getMarkdownFromNotionPage(id);
  if (mdString) {
    const compiled = await compile(mdString, {
      outputFormat: "function-body",
      development: false,
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
    });
    return String(compiled);
  }
  return null;
};

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
