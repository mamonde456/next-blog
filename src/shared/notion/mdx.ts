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

export const hasImages = (compiledCode: any) => {
  if (!compiledCode) return "";
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
  const mdxsWithImages: string[] = [];
  for (const id of ids) {
    if (metaData[id]) {
      const expired = isExpired(metaData[id].cache_generated_at, 24);
      if (expired) {
        mdxsWithImages.push(id);
      } else {
        continue;
      }
    }
    continue;
  }

  return mdxsWithImages;
};

export const handleCacheMDXTTL = async () => {
  const mdxsWithImages = checkCacheTTL();
  if (mdxsWithImages && mdxsWithImages.length > 0) {
    for (const id of mdxsWithImages) {
      const compiled = await compileMdx(id);
      const result = saveFile("/public/cache/mdx", id + ".js", compiled);
      if (result.message === "success" && compiled) {
        console.log("mdx 파일 저장 성공: ", id);
        const savedMetaData = updateJSONFile<MetaDataMap>(
          "/public/cache/metaData.json",
          (data) => {
            data[id].cache_generated_at = new Date().toISOString();
            return data;
          }
        );
        const savedMDX = saveMDXComponent(
          "/public/cache/mdx",
          id + ".js",
          compiled
        );
        if (
          savedMetaData.message === "success" &&
          savedMDX.message === "success"
        ) {
          console.log("mdx 파일 저장 성공: ", id);
          console.log("meta data 파일 저장 성공: ", id);
          continue;
        } else {
          console.log("mdx 파일 저장 실패: ", id);
          console.log("meta data 파일 저장 실패: ", id);
          continue;
        }
      } else {
        console.log("mdx, meta 파일 저장 실패: ", id);
        continue;
      }
    }
  } else {
    console.log("TTL 유효함.");
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
