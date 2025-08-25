import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import {
  NotionWebhooksPayload,
  handleNotionWebhook,
} from "../src/shared/notion/notion-webhooks.ts";
import { parseEnvJson } from "../src/utils/webhooks.ts";

const getWebhookData = () => {
  const webhookRes = process.env.WEBHOOK;
  const webhook = parseEnvJson<NotionWebhooksPayload>(webhookRes);

  if (!webhook) throw new Error("웹훅 데이터가 없습니다.");

  return webhook;
};

async function main() {
  const webhook = getWebhookData();
  if (!webhook) return;
  handleNotionWebhook(webhook);
}

main();
