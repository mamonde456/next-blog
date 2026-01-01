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

type IdAndType = {
  id: string;
  type: string;
};

type Data = {
  parent: {
    id: string;
    type: string;
  };
  updated_properties?: string[];
  updated_blocks?: IdAndType[];
};
type Params = { entity: IdAndType; timestamp: string; data?: Data };
type EventType =
  | "created"
  | "deleted"
  | "content_updated"
  | "properties_updated"
  | "undeleted";

const EventType = {
  created: ({ entity, timestamp }: Params) =>
    createdNotionPage(entity, timestamp), // 페이지 생성
  deleted: ({ entity, timestamp }: Params) =>
    deletedNotionPage(entity, timestamp), // 페이지 삭제
  content_updated: ({ entity, timestamp }: Params) =>
    updatedNotionPage(entity, timestamp), // 페이지 업데이트
  properties_updated: ({ entity, timestamp, data }: Params) =>
    propertiesUpdatedNotionPage(entity, timestamp, data), // 페이지 속성 업데이트
  undeleted: ({ entity, timestamp }: Params) =>
    undeletedNotionPage(entity, timestamp), // 페이지 복원
};

export const handleNotionEvent = (event: NotionWebhooksPayload) => {
  const { type, entity, data, timestamp } = event;
  if (!type)
    return new Error("handleNotionEvent: 이벤트 타입을 찾지 못했습니다.");
  const types = type.split(".");
  const category = types[0];
  if (category === "comment")
    return new Error("handleNotionEvent: comment 지원하지 않는 이벤트입니다.");
  const eventType = types[1] as EventType;
  console.log(eventType);
  if (EventType[eventType]) {
    console.log(EventType[eventType]);
    EventType[eventType]({ entity, timestamp, data });
  }
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
    updateJSONFile<CacheSlugMap>("/public/cache/slugMap.json", (data) => {
      const newSlugMap = { ...data, [toSlug(title)]: id };
      return newSlugMap;
    });
    updateJSONFile<CacheMeta>("/public/cache/metaData.json", (data) => {
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
    updateJSONFile<CacheSlugMap>("/public/cache/slugMap.json", (data) => {
      const newSlugMap = { ...data };
      const key = findKeyByValue(id, data);
      if (!key || (key && !newSlugMap[key])) return newSlugMap;
      delete newSlugMap[key];
      return newSlugMap;
    });
    updateJSONFile<CacheSlugMap>("/public/cache/metaData.json", (data) => {
      const newMetaData = { ...data };
      if (!newMetaData[id]) return newMetaData;
      delete newMetaData[id];
      return newMetaData;
    });

    const deleteMDX = deletedCacheData(`/public/cache/mdx/${id}.js`);
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
    updateJSONFile<CacheSlugMap>("/public/cache/slugMap.json", (data) => {
      const newSlugMap = { ...data, [toSlug(title)]: id };
      return newSlugMap;
    });
    updateJSONFile<CacheMeta>("/public/cache/metaData.json", (data) => {
      const meta = updateNotionMetaFormat(notionPage, 84000);

      const newMetaData = safeClone(data);
      newMetaData[id] = meta;
      return newMetaData;
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

  if (data && data.updated_properties) {
    if (data.updated_properties[0] !== "title") return;
  }

  const slugMap = getCacheData("/public/cache/slugMap.json");
  const key = findKeyByValue(id, slugMap);
  if (key) {
    const newSlugMap = { ...slugMap };
    delete newSlugMap[key];
    // 웹훅에서 변경된 타이틀 이름 혹은 노션 페이지 검색을 통해 새로운 타이틀을 가져와서
    // newSlugMap에 추가하여 saveFile 함수로 저장

    // mdx 캐시 파일도 덮어씌워 변경함.
    const notionPage = (await getNotionPage(id)) as NotionPage;
    if (notionPage) {
      const title =
        notionPage.properties.이름.title[0].plain_text || "제목없음";
      newSlugMap[title] = id;
      saveFile("/public/cache", "slugMap.json", newSlugMap);

      updatedNotionPage(entity, timestamp);
    }
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

export const isPageEvent = (webhook: NotionWebhooksPayload) => {
  // 웹훅 타입이 페이지인지
  if (!webhook) throw Error("isPageEvent: 웹훅 데이터가 없습니다.");
  const type = webhook.type.split(".");
  if (type && type[0] !== "page") return false;
  return true;
};
export const isParentDatabase = (webhook: NotionWebhooksPayload) => {
  if (!webhook) throw Error("isParentDatabase: 웹훅 데이터가 없습니다.");
  // 변경된 부모가 데이터베이스인지
  if (webhook.data.parent.type !== "database") return false;
  return true;
};

export const isSubscribedDatabase = (webhook: NotionWebhooksPayload) => {
  if (!webhook) throw Error("isSubscribedDatabase: 웹훅 데이터가 없습니다.");
  // 변경된 부모의 데이터베이스가 요구하는 데이터 베이스 id인지
  if (removeHyphens(webhook.data.parent.id) !== NOTION_DATABASE_ID)
    return false;
  return true;
};

export const isRelevantPropertyChanged = (webhook: NotionWebhooksPayload) => {
  // 변경한 것이 제목/업로드 태그 변경/내용인지 확인
  const UPLOAD = "%7D%3CnI";
  const properties = webhook.data.updated_properties;
  if (properties) {
    const isUpdate = properties.includes(UPLOAD);
    if (isUpdate) return true;
    return false;
  }
  return false;
};

export const triggerGitHubAction = async (webhook: NotionWebhooksPayload) => {
  const githubActionPayload = {
    event_type: "notion-update",
    client_payload: {
      webhook,
    },
  };
  const octokit = new Octokit({ auth: GITHUB_TOKEN });
  if (GITHUB_OWNER && GITHUB_REPO) {
    try {
      await octokit.repos.createDispatchEvent({
        owner: GITHUB_OWNER ?? GITHUB_OWNER,
        repo: GITHUB_REPO ?? GITHUB_REPO,
        ...githubActionPayload,
      });
      return { status: true };
    } catch (error) {
      console.error("GitHub Actions 트리거 실패: ", error);
      return {
        status: false,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  }
};

export const handleNotionWebhook = (webhook: NotionWebhooksPayload) => {
  try {
    if (
      isPageEvent(webhook) &&
      isParentDatabase(webhook) &&
      isSubscribedDatabase(webhook)
    ) {
      handleNotionEvent(webhook);
    }
  } catch (error) {
    console.error("변경된 페이지를 감지하는 것에 실패했습니다.");
    throw new Error(`handleNotionWebhook: ${error}`);
  }
};

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
