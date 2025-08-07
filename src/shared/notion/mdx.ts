import {
  getCacheData,
  getMarkdownFromNotionPage,
  saveFile,
  saveMDXComponent,
} from "../../../src/features/blog/services/notion";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { compile } from "@mdx-js/mdx";
import { getNotionPage } from "../../../src/features/blog/api/notion";
import { NotionPage } from "../../../src/features/blog/api/notion/type";
import { toSlug } from "../../utils/slugify";
import { isExpired } from "../cache/ttl";
import { updateJSONFile } from "../cache/json";
import { MetaDataMap } from "@/types/cache";

export const compileMdx = async (id: string) => {
  const mdString = await getMarkdownFromNotionPage(id);
  if (!mdString) return null;
  try {
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
    if (!compiled) throw new Error(`MDX 컴파일 실패: ${id}`);
    return String(compiled);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const hasImages = (compiledCode: any) => {
  if (!compiledCode) return false;
  const imagePattern = /_jsx\s*\(\s*(_components\.img|"img")/g;

  if (typeof compiledCode === "string") {
    return imagePattern.test(compiledCode);
  }
  return imagePattern.test(compiledCode.toString());
};

const checkCacheTTL = () => {
  const slugMap = getCacheData("/public/cache/slugMap.json");
  const metaData = getCacheData("/public/cache/metaData.json");
  const ids: string[] = Object.values(slugMap);
  const expiredItems: string[] = [];
  for (const id of ids) {
    if (metaData[id]) {
      const expired = isExpired(metaData[id].cache_generated_at, 24);
      if (expired) {
        const cacheMDX = getCacheData(`/public/cache/mdx/${id}.js`);
        if (!cacheMDX) {
          expiredItems.push(id);
          continue;
        }
        const result = hasImages(cacheMDX);
        if (!result) continue;
        expiredItems.push(id);
      } else {
        continue;
      }
    }
    continue;
  }

  return expiredItems;
};

export const handleCacheMDXTTL = async () => {
  const expiredItems = checkCacheTTL();
  if (!expiredItems || expiredItems.length <= 0) {
    console.log("유효기간 유효함");
    return;
  }
  for (const id of expiredItems) {
    processMDXFile(id);
    updateJSONFile<MetaDataMap>("/public/cache/metaData.json", (data) => {
      data[id].cache_generated_at = new Date().toISOString();
      return data;
    });
  }
};

export const processMDXFile = async (id: string) => {
  try {
    const compiled = await compileMdx(id);
    const result = saveFile("/public/cache/mdx", id + ".js", compiled);

    if (result.message !== "success") {
      throw new Error(`MDX 컴포넌트 저장 실패: ${id}`);
    }
  } catch (error) {
    console.error(`MDX 컴포넌트 저장 실패 [${id}]:`, error);
    throw error;
  }
};

const hasMetaDataChange = async (id: string) => {
  // 캐시데이터와 최신 데이터를 비교하여 타이틀이 변동되었는지,
  // 그외에 변동된 속성값이 있는지 순차적으로 확인
  // 페이지 id를 통해 노션 페이지 속성값만 호출
  const page = (await getNotionPage(id)) as NotionPage;
  if (page) {
    const title = page.properties.이름.title[0].plain_text;
    const cacheMeta = getCacheData("/public/cache/metaData.json");
    const cacheTitle = cacheMeta[id].title;
    if (cacheTitle !== title) {
      const cacheSlugMap = getCacheData("/public/cache/slugMap.json");
      const newSlugMap = JSON.parse(JSON.stringify(cacheSlugMap));
      delete newSlugMap[toSlug(cacheTitle)];
      newSlugMap[toSlug(title)] = id;
      saveFile("/public/cache/", "slugMap.json", newSlugMap);

      const newMetaData = JSON.parse(JSON.stringify(cacheMeta));
      newMetaData[id].title = title;
      saveFile("/public/cache/", "metaSlug.json", newMetaData);
    }
  }
};
