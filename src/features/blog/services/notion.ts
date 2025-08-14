import path from "path";
import fs from "fs";
import { getUploadDatabaseQuery } from "../api/notion/index.ts";
import { NotionType } from "../api/notion/type.ts";
import { toSlug } from "../../../utils/slugify.ts";
import { n2m } from "../../../lib/notion/client.ts";
import { getCacheData, saveFile } from "../../../shared/cache/json.ts";

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

export const saveMDXComponent = (
  src: string,
  slug: string,
  compiled: string
) => {
  try {
    const outDir = path.join(process.cwd(), src);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    fs.writeFileSync(path.join(outDir, slug), compiled);
    return { message: "success", id: slug };
  } catch (error) {
    return { message: "fail: " + error };
  }
};

export const updateNotionMetaFormat = (notion: NotionType, ttl: number) => {
  if (!notion)
    return new Error("saveFormatMDX: notion 데이터를 찾을 수 없습니다.");
  let title = notion.properties.이름.title[0].plain_text;
  if (!notion.properties.이름.title[0].plain_text) title = "제목없음";
  const metaData = {
    title,
    created_time: notion.created_time,
    last_edited_time: notion.last_edited_time,
    cache_generated_at: new Date().toISOString(),
    ttl,
    in_trash: notion.in_trash,
  };

  return metaData;
};

export const getNotionMetaData = (notion: NotionType, ttl: number) => {
  const meta = updateNotionMetaFormat(notion, ttl);
  let cacheMeta = getCacheData("/public/cache/metaData.json");
  if (!cacheMeta) return (cacheMeta = {});
  const newCacheMeta = JSON.parse(JSON.stringify(cacheMeta));
  newCacheMeta[notion.id] = meta;

  return newCacheMeta;
};

export const getNotionSlugMapData = (notion: NotionType) => {
  const cacheSlugMap = getCacheData("/public/cache/slugMap.json");
  let title = toSlug(notion.properties.이름.title[0].plain_text);
  if (!cacheSlugMap) return null;
  if (!notion.properties.이름.title[0].plain_text) title = "제목없음";
  const newCacheMeta = JSON.parse(JSON.stringify(cacheSlugMap));
  newCacheMeta[title] = notion.id;

  return newCacheMeta;
};
