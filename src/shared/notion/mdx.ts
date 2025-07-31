import {
  getCacheData,
  getMarkdownFromNotionPage,
  saveFile,
} from "../../../src/features/blog/services/notion";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { compile } from "@mdx-js/mdx";
import { getNotionPage } from "@/features/blog/api/notion";
import { NotionPage, NotionType } from "@/features/blog/api/notion/type";
import { toSlug } from "@/utils/slugify";

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
  const imagePattern = /_jsx\s*\(\s*(_components\.img|"img")/g;

  if (typeof compiledCode === "string") {
    return imagePattern.test(compiledCode);
  }

  return imagePattern.test(compiledCode.toString());
};

export const handleCacheMDXTTL = async () => {
  // mdx 들을 순회하며 이미지가 있는 지 확인
  // 이미지 있는 mdx의 id 추출
  // id로 새롭게 페이지를 불러와 캐시 데이터 갱신
  const slugMap = getCacheData("/public/cache/slugMap.json");
  const ids: string[] = Object.values(slugMap);
  const mdxsWithImages: string[] = [];
  for (const id of ids) {
    const mdx = getCacheData(`/public/cache/mdx/${id}`);
    const result = hasImages(mdx);
    if (result) {
      mdxsWithImages.push(id);
      continue;
    }
    continue;
  }

  // 캐시 데이터를 최신 데이터로 갱신
  // mdx 파일 갱신
  // slugMap 확인 필요 -> 제목 변경 시에...
  // metaData도 갱신 필요.
  for (const id of mdxsWithImages) {
    const compiled = compileMdx(id);
    const result = saveFile("/public/cache/mdx", id, compiled);
    if (result.message === "success") {
      console.log("mdx 파일 저장 성공: ", id);
      const cacheMetaData = getCacheData(`/public/cache/metaData.json`);
      cacheMetaData.cache_generated_at = new Date().toISOString();
      const result = saveFile("/public/cache/mdx", id, compiled);
      if (result.message === "success") {
        console.log("meta data 파일 저장 성공: ", id);
        continue;
      } else {
        console.log("meta data 파일 저장 실패: ", id);
        continue;
      }
    } else {
      console.log("파일 저장 실패: ", id);
      continue;
    }
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
      // 데이터 갱신
      //slugMap 갱신
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
