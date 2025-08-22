import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import {
  NotionWebhooksPayload,
  handleNotionWebhook,
} from "../src/shared/notion/notion-webhooks.ts";
import { handleCacheMDXTTL } from "../src/shared/notion/mdx.ts";
import { parseEnvJson } from "../src/utils/webhooks.ts";

const getWebhookData = () => {
  const webhookRes = process.env.WEBHOOK;
  const webhook = parseEnvJson<NotionWebhooksPayload>(webhookRes);

  if (!webhook) throw new Error("웹훅 데이터가 없습니다.");

  return webhook;
};

async function main() {
  handleCacheMDXTTL(); // TTL 만료인지 확인
  const webhook = getWebhookData();
  if (!webhook) return;
  handleNotionWebhook(webhook);
}

main();
