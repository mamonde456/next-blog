import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import {
  handleNotionEvent,
  handleNotionWebhook,
} from "../src/shared/notion/notion-webhooks.ts";
import { handleCacheMDXTTL } from "@/shared/notion/mdx.ts";

const getWebhookData = () => {
  const webhookDataStr = process.env.WEBHOOK_DATA;
  if (!webhookDataStr) return console.log("웹훅 데이터가 없습니다.");
  return JSON.parse(webhookDataStr);
};

async function main() {
  handleCacheMDXTTL(); // TTL 만료인지 확인
  const webhook = getWebhookData();

  if (!webhook) return;
  handleNotionWebhook(webhook, handleNotionEvent);
}

main();
