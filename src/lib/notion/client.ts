import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { NOTION_TOKEN } from "../../../const.ts";

export const notion = new Client({ auth: NOTION_TOKEN });
export const n2m = new NotionToMarkdown({ notionClient: notion });
