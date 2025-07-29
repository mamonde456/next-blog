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

// 웹훅 알림이 전달됨 -> 깃헙 트리거 발생해서 스크립트 실행
// 스크립트 실행할 때 웹훅 데이터가 전달되어 와야 함.
// 그렇다면, 웹훅 알림이 없을 때는?
// ttl 만료로 다시 갱신해야 할 때는 어떤 걸 트리거 해야할까?
// updatedNotionPage 함수를 호출하면 됨. id만 넘겨주면 괜찮음.
// 그렇다면 재갱신은 어디서 이루어져야 할까?
//앱 실행할 때 이루어져야 함. 즉 빌드 전에.
// 그렇다면 여기서 실행되어야 함.
//

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
