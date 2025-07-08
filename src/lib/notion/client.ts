import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NOTION_TOKEN } from "../../../const.ts";
import dotenv from "dotenv";

if (
  typeof process !== "undefined" &&
  process?.env?.NODE_ENV !== "production" &&
  !process.env.NEXT_PUBLIC_API_KEY
) {
  dotenv.config({ path: ".env.local" });
}

if (!process.env.NOTION_TOKEN) {
  throw new Error("🚨 NOTION_TOKEN이 설정되어 있지 않습니다.");
}

export const notion = new Client({
  auth: NOTION_TOKEN || process.env.NOTION_TOKEN,
});
export const n2m = new NotionToMarkdown({ notionClient: notion });
