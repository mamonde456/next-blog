import path from "path";
import fs from "fs";
import { getUploadDatabaseQuery } from "../api/notion/index.ts";
import { NotionType } from "../api/notion/type.ts";
import { toSlug } from "@/utils/slugify.ts";
import { n2m } from "@/lib/notion/client.ts";

export const getSlugMap = async (): Promise<Record<string, string>> => {
  const notionData = await getUploadDatabaseQuery();
  const notionList = notionData?.results as NotionType[];
  const slugMap =
    notionList && notionList.length > 0
      ? Object.fromEntries(
          notionList.map((notion) => [
            toSlug(notion.properties["이름"].title[0].plain_text),
            notion.id,
          ])
        )
      : {};
  return slugMap;
};

export const getMarkdownFromNotionPage = async (pageId: string) => {
  if (!pageId) return console.log("page id not found.");
  try {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const { parent } = await n2m.toMarkdownString(mdblocks);
    return parent;
  } catch (error) {
    console.log("getMarkdownFromNotionPage error, ", error);
    return "";
  }
};
export const getMarkdownFormNotionBlocks = async (results: any) => {
  if (!results) throw new Error(`results is not found. results: ${results}`);
  try {
    const x = await n2m.blocksToMarkdown(results);
    const { parent } = await n2m.toMarkdownString(x);
    return parent;
  } catch (error) {
    console.log("getMarkdownFormNotionBlocks error, ", error);
    return "";
  }
};

export const replaceCodeFormat = (markdown: any, slug: string) => {
  const CODE_BLOCK_REGEX = /```(\w*)\n([\s\S]*?)```/g;
  const codeBlocks: Array<{ lang: string; code: string }> = [];
  const replaced = markdown.replace(
    CODE_BLOCK_REGEX,
    (_: any, lang: string, code: any) => {
      codeBlocks.push({ lang, code });
      return `<CodeSlot index={${codeBlocks.length - 1}}/>`;
    }
  );
  saveJSON("public/code-blocks", `${slug}.json`, codeBlocks);

  return replaced;
};

export const saveJSON = (src: string, slug: string, json?: any) => {
  const outDir = path.join(process.cwd(), src);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, slug), JSON.stringify(json, null, 2));
};

export const getCacheData = (src: string) => {
  const filePath = path.join(process.cwd(), src);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContent);
};
