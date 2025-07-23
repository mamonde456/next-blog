import path from "path";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import {
  handleNotionEvent,
  handleNotionWebhook,
} from "../src/shared/notion/notion-webhooks.ts";

const getWebhookData = () => {
  const webhookDataStr = process.env.WEBHOOK_DATA;
  if (!webhookDataStr) return console.log("웹훅 데이터가 없습니다.");
  return JSON.parse(webhookDataStr);
};

async function main() {
  const webhook = getWebhookData();
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
  if (!webhook) return;
  handleNotionWebhook(webhook, handleNotionEvent);

  // const { slugMap, notionList } = await getSlugMap(NOTION_DATABASE_ID);
  // const cacheDir = path.join(process.cwd(), "/public/cache");
  // if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);
  // fs.writeFileSync(
  //   path.join(cacheDir, "slugMap.json"),
  //   JSON.stringify(slugMap, null, 2)
  // );

  // for (const item of notionList) {
  //   const id = item.id;
  //   const title = item.properties["이름"].title[0].plain_text;
  //   const cacheDir = path.join(process.cwd(), `/public/mdx/${id}`);
  //   const cacheMetaData = getCacheData(`/public/mdx/${id}.json`)?.metaData;

  //   if (item.in_trash) {
  //     if (fs.existsSync(cacheDir)) {
  //       fs.rmdirSync(cacheDir, { recursive: true });
  //       console.log(`🗑️ 캐시 삭제: ${title} (${id})`);
  //     }
  //     continue;
  //   }
  //   if (!cacheMetaData) {
  //     console.log(`📦 캐시 생성: ${title} (${id}) → 캐시 없음`);
  //     handleMDXFile(id, item);
  //     continue;
  //   }

  //   if (cacheMetaData.notion.last_edited_time !== item.last_edited_time) {
  //     console.log(`♻️ 캐시 갱신: ${title} (${id}) → 노션 변경됨`);
  //     handleMDXFile(id, item);
  //     continue;
  //   }
  //   if (isExpired(cacheMetaData?.update_time)) {
  //     console.log(`⏰ TTL 만료: ${title} (${id})`);
  //     handleMDXFile(id, item);
  //     continue;
  //   }

  //   console.log(`✅ 캐시 유지: ${title} (${id})`);
  // }
}

main();
