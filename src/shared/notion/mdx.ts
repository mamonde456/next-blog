import { getMarkdownFromNotionPage } from "../../../src/features/blog/services/notion";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
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
