import { getNotionPage } from "../../features/blog/api/notion";
import { NotionPage } from "../../features/blog/api/notion/type";
import { removeHyphens } from "../../utils/webhooks";
import {
  GITHUB_OWNER,
  GITHUB_REPO,
  GITHUB_TOKEN,
  NOTION_DATABASE_ID,
} from "../../../const";
import { Octokit } from "@octokit/rest";
import { compileMdx } from "./mdx";
import { isExpired } from "../cache/ttl";
import {
  deletedCacheData,
  getCacheData,
  saveFile,
  updateJSONFile,
} from "../cache/json";
import {
  findKeyByValue,
  safeClone,
  successFailureLogRecorder,
} from "../../utils/common";
import { CacheSlugMap, CacheMeta } from "../../types/cache";
import { toSlug } from "../../utils/slugify";
import { updateNotionMetaFormat } from "../../features/blog/services/notion";

export type NotionWebhooksPayload = {
  id: string;
  timestamp: string;
  workspace_id: string;
  workspace_name: string;
  subscription_id: string;
  integration_id: string;
  type: string;
  authors: IdAndType[];
  accessible_by: IdAndType[];
  attempt_number: string;
  entity: IdAndType;
  data: Data;
};

export type IdAndType = {
  id: string;
  type: string;
};

export type Data = {
  parent: {
    id: string;
    type: string;
  };
  updated_properties?: string[];
  updated_blocks?: IdAndType[];
};

export const createdNotionPage = async (
  entity: IdAndType,
  timestamp: string
) => {
  // 생성된 페이지
  const { id, type } = entity;
  try {
    const notionPage = (await getNotionPage(id)) as NotionPage;
    if (!notionPage)
      throw new Error(`createdNotionPage: [${id}]: 노션 페이지 읽어오기 실패`);
    const titles = notionPage.properties.이름.title;
    const title = titles[0] ? titles[0].plain_text : "제목없음";
    updateJSONFile<CacheSlugMap>("public/cache/slugMap.json", (data) => {
      const newSlugMap = { ...data, [toSlug(title)]: id };
      return newSlugMap;
    });
    updateJSONFile<CacheMeta>("public/cache/metaData.json", (data) => {
      const meta = updateNotionMetaFormat(notionPage, 84000);

      const newMetaData = safeClone(data);
      newMetaData[id] = meta;
      return newMetaData;
    });
  } catch (error) {
    console.error(error);
    throw new Error(`✅ createdNotionPage: [${id}]: 생성 실패`);
  }
};

export const deletedNotionPage = (entity: IdAndType, timestamp: string) => {
  const { id } = entity;
  try {
    updateJSONFile<CacheSlugMap>("public/cache/slugMap.json", (data) => {
      const newSlugMap = { ...data };
      const key = findKeyByValue(id, data);
      if (!key || (key && !newSlugMap[key])) return newSlugMap;
      delete newSlugMap[key];
      return newSlugMap;
    });
    updateJSONFile<CacheSlugMap>("public/cache/metaData.json", (data) => {
      const newMetaData = { ...data };
      if (!newMetaData[id]) return newMetaData;
      delete newMetaData[id];
      return newMetaData;
    });

    const deleteMDX = deletedCacheData(`public/cache/mdx/${id}.js`);
    successFailureLogRecorder([deleteMDX]);
  } catch (error) {
    console.error(error);
    throw new Error(`✅ deletedNotionPage: [${id}]: 삭제 실패`);
  }
};

export const updatedNotionPage = async (
  entity: IdAndType,
  timestamp: string
) => {
  const { id } = entity;
  try {
    const compiled = await compileMdx(id);
    if (!compiled) throw new Error(`updatedNotionPage: [${id}]: 컴파일 실패`);
    const notionPage = (await getNotionPage(id)) as NotionPage;
    if (!notionPage)
      throw new Error(`updatedNotionPage: [${id}]: 노션 페이지 읽어오기 실패`);
    const titles = notionPage.properties.이름.title;
    const title = titles[0] ? titles[0].plain_text : "제목없음";
    const slug = toSlug(title);

    console.log(`제목: ${title}`);
    console.log(` 슬러그: ${slug}`);

    updateJSONFile<CacheSlugMap>("public/cache/slugMap.json", (data) => {
      console.log(`   기존 항목: ${Object.keys(data).length}개`);
      const updated = { ...data, [slug]: id };
      console.log(`   업데이트 후: ${Object.keys(updated).length}개`);
      return updated;
    });
    updateJSONFile<CacheMeta>("public/cache/metaData.json", (data) => {
      const meta = updateNotionMetaFormat(notionPage, 84000);
      const updated = safeClone(data);
      updated[id] = meta;
      return updated;
    });
    const saveMdx = saveFile("public/cache/mdx", id + ".js", compiled);
    successFailureLogRecorder([saveMdx]);
  } catch (error) {
    console.error(error);
    throw new Error(`✅ updatedNotionPage: [${id}]: 생성 실패`);
  }
};

export const propertiesUpdatedNotionPage = async (
  entity: IdAndType,
  timestamp: string,
  data?: Data
) => {
  const { id } = entity;
  try {
    const notionPage = (await getNotionPage(id)) as NotionPage;
    if (!notionPage) return console.error("노션 페이지를 찾을 수 없습니다.");

    const title = notionPage.properties.이름.title[0].plain_text || "제목없음";
    const slug = toSlug(title);

    if (data && data.updated_properties) {
      if (data.updated_properties.includes("title")) {
        // title 변경함.
        updateJSONFile<CacheSlugMap>("public/cache/slugMap.json", (cache) => {
          console.log(`   기존 항목: ${Object.keys(cache).length}개`);
          const key = findKeyByValue(id, cache);
          if (!key) {
            const updated = { ...cache, [slug]: id };
            console.log(`   업데이트 후: ${Object.keys(updated).length}개`);
            return updated;
          }

          const updated = safeClone(data);

          delete updated[key];
          updated[slug] = id;

          return updated;
        });
        console.log(`[${slug}]:id   제목 업데이트 완료.`);
        if (data.updated_properties.length <= 1) {
          return console.log(`업데이트 종료`);
        }
      }

      updateJSONFile<CacheMeta>("public/cache/metaData.json", (data) => {
        const meta = updateNotionMetaFormat(notionPage, 84000);
        const updated = safeClone(data);
        updated[id] = meta;
        return updated;
      });
      console.log(`[${id}]   메타 데이터 업데이트 완료.`);
      console.log(`업데이트 종료`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`✅ propertiesUpdatedNotionPage: [${id}]: 업데이트 실패`);
  }
};

export const undeletedNotionPage = (entity: IdAndType, timestamp: string) => {
  // 삭제된 내용 다시 복원.
  // 생성할 때와 마찬가지.
  // 제목을 찾아 slugMap에 저장
  // 페이지 내용을 검색해 mdx로 추출한 뒤
  // 캐시 파일로 저장
  createdNotionPage(entity, timestamp);
};

export const isPageEvent = (webhookType: NotionWebhooksPayload["type"]) => {
  // 웹훅 타입이 페이지인지
  if (!webhookType) throw Error("isPageEvent: 웹훅 데이터가 없습니다.");
  const type = webhookType.split(".");
  if (type && type[0] !== "page") return false;
  return true;
};
export const isParentDatabase = (
  parent: NotionWebhooksPayload["data"]["parent"]
) => {
  if (!parent) throw Error("isParentDatabase: 웹훅 데이터가 없습니다.");
  // 변경된 부모가 데이터베이스인지
  if (parent.type !== "database") return false;
  return true;
};

export const isSubscribedDatabase = (
  parent: NotionWebhooksPayload["data"]["parent"]
) => {
  if (!parent) throw Error("isSubscribedDatabase: 웹훅 데이터가 없습니다.");
  // 변경된 부모의 데이터베이스가 요구하는 데이터 베이스 id인지
  if (removeHyphens(parent.id) !== NOTION_DATABASE_ID) return false;
  return true;
};

export const isRelevantPropertyChanged = (webhook: NotionWebhooksPayload) => {
  // 변경한 것이 제목/업로드 태그 변경/내용인지 확인
  const UPLOAD = "%7D%3CnI";
  const properties = webhook.data.updated_properties;
  if (properties) {
    const isUpdate = properties.includes(UPLOAD);
    if (isUpdate) return "true";
    return false;
  }
  return false;
};

export const triggerGitHubAction = async (webhook: NotionWebhooksPayload) => {
  if (!GITHUB_TOKEN) {
    console.error("GITHUB_TOKEN이 설정되지 않았습니다.");
    return;
  }

  if (!GITHUB_OWNER || !GITHUB_REPO) {
    console.error("GITHUB_OWNER 또는 GITHUB_REPO가 설정되지 않았습니다.");
    return;
  }
  const octokit = new Octokit({
    auth: GITHUB_TOKEN,
    log: {
      debug: console.debug,
      info: console.info,
      warn: console.warn,
      error: console.error,
    },
  });

  console.log("GitHub 설정:", {
    token: GITHUB_TOKEN ? `${GITHUB_TOKEN.slice(0, 7)}...` : "MISSING",
    owner: GITHUB_OWNER,
    repo: GITHUB_REPO,
  });

  try {
    console.log("GitHub Actions 트리거 시도:", {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      event_type: "notion-update",
    });

    const response = await octokit.repos.createDispatchEvent({
      owner: GITHUB_OWNER ?? GITHUB_OWNER,
      repo: GITHUB_REPO ?? GITHUB_REPO,
      event_type: "notion-update",
      client_payload: {
        webhook,
      },
    });
    console.log("트리거 성공", webhook);
    return { status: true };
  } catch (error) {
    console.error("GitHub Actions 트리거 실패: ", error);
    return {
      status: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
};

// export const handleNotionWebhook = (webhook: NotionWebhooksPayload) => {
//   try {
//     if (
//       isPageEvent(webhook) &&
//       isParentDatabase(webhook) &&
//       isSubscribedDatabase(webhook)
//     ) {
//       handleNotionEvent(webhook);
//     }
//   } catch (error) {
//     console.error("변경된 페이지를 감지하는 것에 실패했습니다.");
//     throw new Error(`handleNotionWebhook: ${error}`);
//   }
// };

export const checkCacheNotionTTL = () => {
  const cacheMeta = getCacheData("/public/cache/metaData.json");
  const cacheExpired: string[] = [];
  Object.keys(cacheMeta).forEach((id) => {
    const generatedAt = cacheMeta[id].cache_generated_at;
    const expired = isExpired(generatedAt);
    if (expired) cacheExpired.push(id);
  });

  return cacheExpired;
};
