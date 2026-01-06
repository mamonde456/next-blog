import { NotionType } from "../src/features/blog/api/notion/type";
import { getUploadDatabaseQuery } from "../src/features/blog/api/notion";
import {
  deletedCacheData,
  getCacheData,
  saveFile,
} from "../src/shared/cache/json";
import { compileMdx } from "../src/shared/notion/mdx";
import {
  buildMetaPatch,
  buildSlugPatch,
  saveMDXComponent,
} from "../src/features/blog/services/notion";

import { findKeyByValue } from "../src/utils/common";
import { Meta } from "../src/types/cache";
import { shouldRebuild } from "../src/shared/cache/ttl";

const databaseId = process.env.NOTION_DATABASE_ID;
const CACHE_TTL_SECONDS = 86400;

async function main() {
  let cacheMeta = getCacheData("/public/cache/metaData.json") ?? {};
  let cacheSlugMap = getCacheData("/public/cache/slugMap.json") ?? {};

  const notionData = await getUploadDatabaseQuery(databaseId);
  const notionList = (notionData?.results as NotionType[]) ?? [];
  const notionIdSet = new Set(notionList.map((n) => n.id));

  // 노션 X -> 캐시 삭제
  for (const cacheId of Object.keys(cacheMeta)) {
    if (notionIdSet.has(cacheId)) continue;
    const slug = findKeyByValue(cacheId, cacheSlugMap);
    delete cacheMeta[cacheId];
    if (slug) delete cacheSlugMap[slug];
    deletedCacheData(`/public/cache/mdx/${cacheId}.js`);
  }

  const rebuildTargets = new Set<string>();
  // 최초 생성
  for (const item of notionList) {
    const id = item.id;
    const cache = cacheMeta[id] as Meta | undefined;
    if (!cache) {
      cacheMeta = { ...cacheMeta, ...buildMetaPatch(item, CACHE_TTL_SECONDS) };
      cacheSlugMap = { ...cacheSlugMap, ...buildSlugPatch(item) };
      rebuildTargets.add(id);
      continue;
    }
    if (shouldRebuild(item, cache)) {
      cacheMeta = { ...cacheMeta, ...buildMetaPatch(item, CACHE_TTL_SECONDS) };
      cacheSlugMap = { ...cacheSlugMap, ...buildSlugPatch(item) };
      rebuildTargets.add(id);
    }
  }
  // 저장
  saveFile("public/cache", "metaData.json", cacheMeta);
  saveFile("public/cache", "slugMap.json", cacheSlugMap);

  for (const id of rebuildTargets) {
    const { compiled } = await compileMdx(id);
    if (!compiled) continue;
    saveMDXComponent("public/cache", `${id}.js`, compiled);
  }
}

main();
