import {
  NotionQueries,
  NotionQuery,
  NotionType,
} from "../src/features/blog/api/notion/type";
import { getUploadDatabaseQuery } from "../src/features/blog/api/notion";
import {
  deletedCacheData,
  getCacheData,
  saveFile,
} from "../src/shared/cache/json";
import { compileMdx } from "../src/shared/notion/mdx";
import {
  getNotionMetaData,
  getNotionSlugMapData,
  saveMDXComponent,
} from "../src/features/blog/services/notion";
import { successFailureLogRecorder } from "../src/utils/common";

import fs from "fs";
import { findKeyByValue } from "../src/utils/common";

const databaseId = process.env.NOTION_DATABASE_ID;

async function main() {
  let cacheMeta = getCacheData("/public/cache/metaData.json");
  let cacheSlugMap = getCacheData("/public/cache/slugMap.json");

  const notionData = await getUploadDatabaseQuery(databaseId);
  const notionList = notionData?.results ?? [];

  const notionIdSet = new Set(notionList.map((n) => n.id));

  // 노션에 없는 캐시 데이터 삭제
  for (const id of Object.keys(cacheMeta)) {
    if (!notionIdSet.has(id)) {
      const slug = findKeyByValue(id, cacheSlugMap) || "";

      delete cacheMeta[id];
      delete cacheSlugMap[slug];
      deletedCacheData(`/public/cache/mdx/${id}.js`);
    }
  }

  for (const item of notionList as NotionType[]) {
    const id = item.id;
    const cacheFile = cacheMeta[id];
    if (cacheFile && cacheFile.last_edited_time === item.last_edited_time) {
      continue;
    }
    const { compiled } = await compileMdx(id);
    if (!compiled) continue;

    const CACHE_TTL_SECONDS = 24 * 60 * 60; // 24시간

    cacheMeta = getNotionMetaData(item, CACHE_TTL_SECONDS);
    cacheSlugMap = getNotionSlugMapData(item);

    saveMDXComponent("public/cache/mdx", id + ".js", compiled);
    saveFile("public/cache", "metaData.json", cacheMeta);
    saveFile("public/cache", "slugMap.json", cacheSlugMap);
  }
}

main();
