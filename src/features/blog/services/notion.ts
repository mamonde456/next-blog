import path from "path";
import fs from "fs";
import { getUploadDatabaseQuery } from "../api/notion/index.ts";
import { NotionType } from "../api/notion/type.ts";
import { toSlug } from "../../../utils/slugify.ts";
import { n2m } from "../../../lib/notion/client.ts";
import { VFile } from "rehype-raw/lib/index";

export const getSlugMap = async (
  id?: string | undefined
): Promise<{ slugMap: Record<string, string>; notionList: NotionType[] }> => {
  const notionData = await getUploadDatabaseQuery(id);
  const notionList = notionData?.results as NotionType[];
  const slugMap =
    notionList && notionList.length > 0
      ? Object.fromEntries(
          notionList.map((notion) => {
            const name =
              notion.properties["이름"]?.title[0]?.plain_text ?? "제목없음";
            return [toSlug(name), notion.id];
          })
        )
      : {};
  return { slugMap, notionList };
};

export const getMarkdownFromNotionPage = async (pageId: string) => {
  if (!pageId) return console.log("page id not found.");
  try {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const { parent } = n2m.toMarkdownString(mdblocks);
    return parent;
  } catch (error) {
    console.log("getMarkdownFromNotionPage error, ", error);
    return null;
  }
};
export const getMarkdownFormNotionBlocks = async (results: any) => {
  if (!results) throw new Error(`results is not found. results: ${results}`);
  try {
    const x = await n2m.blocksToMarkdown(results);
    const { parent } = n2m.toMarkdownString(x);
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
  saveFile("public/code-blocks", `${slug}.json`, codeBlocks);

  return replaced;
};

export const saveFile = (src: string, slug: string, json: any) => {
  try {
    const outDir = path.join(process.cwd(), src);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    fs.writeFileSync(path.join(outDir, slug), JSON.stringify(json, null, 2));
    return { message: "success", id: src + slug };
  } catch (error) {
    return { message: "fail: " + error };
  }
};

export const saveMDXComponent = (
  compiled: VFile,
  src: string,
  slug: string
) => {
  try {
    const outDir = path.join(process.cwd(), src);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    fs.writeFileSync(path.join(outDir, slug), compiled.toString());
    return { message: "success", id: slug };
  } catch (error) {
    return { message: "fail: " + error };
  }
};

export const getCacheData = (src: string) => {
  const filePath = path.join(process.cwd(), src);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    if (src.endsWith(".js")) {
      return fileContent;
    }
    return JSON.parse(fileContent);
  }
  return null;
};

export const deletedCacheData = (src: string) => {
  const filePath = path.join(process.cwd(), src);
  if (fs.existsSync(filePath)) {
    const fileContent = fs.rmdirSync(filePath);
    return { message: "success" };
  }
  return null;
};
