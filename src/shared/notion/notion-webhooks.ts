import {
  deletedCacheData,
  getCacheData,
  getNotionMetaData,
  getNotionSlugMapData,
  getSlugMap,
  saveFile,
  saveMDXComponent,
  successFailureLogRecorder,
} from "../../features/blog/services/notion";
import { getNotionPage } from "../../features/blog/api/notion";
import { NotionPage } from "../../features/blog/api/notion/type";
import { findKeyByValue } from "../../utils/webhooks";
import {
  GITHUB_OWNER,
  GITHUB_REPO,
  GITHUB_TOKEN,
  NOTION_DATABASE_ID,
} from "../../../const";
import { Octokit } from "@octokit/rest";
import { compileMdx } from "./mdx";

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
  if (EventType[eventType]) {
    EventType[eventType]({ entity, timestamp, data });
  }
};

export const createdNotionPage = async (
  entity: IdAndType,
  timestamp: string
) => {
  // 생성된 페이지
  const { id, type } = entity;
  const compiled = await compileMdx(id);
  if (!compiled) return { notFound: true };
  const notionPage = (await getNotionPage(id)) as NotionPage;
  let slugOk = null;
  if (notionPage) {
    const title = notionPage.properties.이름.title[0].plain_text || "제목없음";
    const slugMap = getCacheData("/public/cache/slugMap.json");
    const newSlugMap = { ...slugMap, [title]: id };
    slugOk = saveFile("public/cache", "slugMap.json", newSlugMap);
  }

  const saveMdx = saveMDXComponent("public/cache/mdx", id + ".js", compiled);
  successFailureLogRecorder([saveMdx]);
};

export const deletedNotionPage = (entity: IdAndType, timestamp: string) => {
  const { id } = entity;
  const slugMap = getCacheData("/public/cache/slugMap.json");
  const key = findKeyByValue(slugMap, id);
  let slugOk = null;
  if (key) {
    const newSlugMap = { ...slugMap };
    delete newSlugMap[key];
    slugOk = "success";
  }
  const result = deletedCacheData(`/public/mdx/${id}.json`);
  if (result?.message === "success" && slugOk === "success") {
    console.log("🚨 삭제 완료: ", id);
  }
};

export const updatedNotionPage = async (
  entity: IdAndType,
  timestamp: string
) => {
  const { id } = entity;
  // 데이터베이스 항목만 업데이트 지원.

  const compiled = await compileMdx(id);

  const { notionList } = await getSlugMap();
  const notion = notionList.find((item) => item.id === id);

  if (!notion) return { notFound: true };
  if (!compiled) return { notFound: true };

  const CACHE_TTL_SECONDS = 24 * 60 * 60; // 24시간
  const newMeta = getNotionMetaData(notion, CACHE_TTL_SECONDS);
  const newslug = getNotionSlugMapData(notion);

  const saveMeta = saveFile("public/cache", "metaData.json", newMeta);
  const saveSlug = saveFile("public/cache", "slugMap.json", newslug);
  const saveMdx = saveMDXComponent("public/cache/mdx", id + ".js", compiled);
  successFailureLogRecorder([saveMeta, saveSlug, saveMdx]);
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
  const key = findKeyByValue(slugMap, id);
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

// 웹훅 알림이 오면, 캐시파일을 재갱신. < 깃헙 액션 실행

export const isPageEvent = (webhook: NotionWebhooksPayload) => {
  // 웹훅 타입이 페이지인지
  const type = webhook.type.split(".");
  if (type && type[0] !== "page") return false;
  return true;
};
export const isParentDatabase = (webhook: NotionWebhooksPayload) => {
  // 변경된 부모가 데이터베이스인지
  if (webhook.data.parent.type && webhook.data.parent.type !== "database")
    return false;
  return true;
};

export const isSubscribedDatabase = (webhook: NotionWebhooksPayload) => {
  // 변경된 부모의 데이터베이스가 요구하는 데이터 베이스 id인지
  if (webhook.data.parent.id && webhook.data.parent.id !== NOTION_DATABASE_ID)
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
  console.log("깃헙 트리거 함수 실행");
  const githubActionPayload = {
    event_type: "notion-update",
    client_payload: webhook,
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
      return { status: false, error };
    }
  }
};

export const handleNotionWebhook = (
  webhook: NotionWebhooksPayload,
  fn: (webhook: NotionWebhooksPayload) => void
) => {
  if (
    isPageEvent(webhook) &&
    isParentDatabase(webhook) &&
    isSubscribedDatabase(webhook)
  ) {
    console.log("test 잘되나요?");
    fn(webhook);
  }
};
