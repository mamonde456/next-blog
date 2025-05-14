import { NOTION_TOKEN } from "@/const";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export const notion = new Client({ auth: NOTION_TOKEN });
export const n2m = new NotionToMarkdown({ notionClient: notion });
