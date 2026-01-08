import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import {
  Data,
  IdAndType,
  NotionWebhooksPayload,
  createdNotionPage,
  deletedNotionPage,
  isPageEvent,
  isParentDatabase,
  isSubscribedDatabase,
  propertiesUpdatedNotionPage,
  undeletedNotionPage,
  updatedNotionPage,
} from "../src/shared/notion/notion-webhooks.ts";
import { parseEnvJson } from "../src/utils/webhooks.ts";

type Params = { entity: IdAndType; timestamp: string; data?: Data };
type EventType =
  | "created"
  | "deleted"
  | "content_updated"
  | "properties_updated"
  | "undeleted";

const getWebhookData = () => {
  const webhookRes = process.env.WEBHOOK;
  const webhook = parseEnvJson<NotionWebhooksPayload>(webhookRes);

  if (!webhook) throw new Error("웹훅 데이터가 없습니다.");

  return webhook;
};

const EventHandlers = {
  created: ({ entity, timestamp }: Params) => {
    console.log("페이지 생성 처리");
    createdNotionPage(entity, timestamp);
  },
  deleted: ({ entity, timestamp }: Params) => {
    console.log("페이지 삭제 처리");
    deletedNotionPage(entity, timestamp);
  },
  content_updated: ({ entity, timestamp }: Params) => {
    console.log("컨텐츠 업데이트 처리");
    updatedNotionPage(entity, timestamp);
  },
  properties_updated: ({ entity, timestamp, data }: Params) => {
    console.log("속성 업데이트 처리");
    propertiesUpdatedNotionPage(entity, timestamp, data);
  },
  undeleted: ({ entity, timestamp }: Params) => {
    console.log("페이지 복원 처리");
    undeletedNotionPage(entity, timestamp);
  },
} as const;

async function main() {
  const webhook = getWebhookData();
  if (!webhook) return;

  const { type, entity, data, timestamp } = webhook;

  if (
    !isPageEvent(type) &&
    !isParentDatabase(data.parent) &&
    !isSubscribedDatabase(data.parent)
  ) {
    return console.error("요구하는 데이터베이스의 이벤트가 아닙니다.");
  }
  if (!type)
    return new Error("handleNotionEvent: 이벤트 타입을 찾지 못했습니다.");
  const types = type.split(".");
  const category = types[0];
  if (category === "comment")
    return new Error("handleNotionEvent: comment 지원하지 않는 이벤트입니다.");

  const eventType = types[1] as EventType;

  const handler = EventHandlers[eventType];
  if (handler) {
    handler({ entity, timestamp, data });
  } else {
    console.warn(`알 수 없는 이벤트: ${eventType}`);
  }
}

main();
