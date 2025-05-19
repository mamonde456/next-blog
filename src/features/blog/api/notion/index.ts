import { NOTION_DATABASE_ID } from "../../../../../const.ts";
import { notion } from "@/lib/notion/client.ts";
import { Client } from "@notionhq/client";

const databaseId = NOTION_DATABASE_ID;

// notion database 가져오기
export const getNotionData = async () => {
  if (databaseId) {
    try {
      const response = await notion.databases.retrieve({
        database_id: databaseId,
      });
      return response;
    } catch (error) {
      console.log("🚨 get database error: ", error);
    }
  } else {
    console.log("database id를 찾을 수 없습니다.");
  }
};

export const getUploadDatabaseQuery = async () => {
  if (databaseId) {
    try {
      const response = await notion.databases.query({
        database_id: databaseId as string,
        filter: {
          property: "upload",
          select: {
            equals: "Published",
          },
        },
      });
      return response;
    } catch (error) {
      console.log("🚨 get upload database query error: ", error);
    }
  } else {
    console.log("database id를 찾을 수 없습니다.");
  }
};

export const getNotionPageBlocks = async (pageId: string) => {
  if (!pageId) throw new Error(`page id가 없습니다. page id: ${pageId}`);
  try {
    const { results } = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 20, // 전체 가져오기 or 일부
    });
    return results;
  } catch (error) {
    console.log("🚨 get Notion Page error: ", error);
  }
};

export const getNotionPage = async (pageId: string) => {
  if (!pageId) throw new Error(`page id가 없습니다. page id: ${pageId}`);
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  } catch (error) {
    console.log("🚨 get Notion Page error: ", error);
  }
};

export const updateUploadProperties = async (isUpload: boolean) => {
  const options = {
    method: "PATCH",
    headers: { accept: "application/json", "content-type": "application/json" },
    properties: isUpload ? "checkbox" : { checkbox: null },
  };
  if (databaseId) {
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${databaseId}`,
        options
      );
      const data = response.json();
      return data;
    } catch (error) {
      console.log("🚨 update database properties error: ", error);
    }
  } else {
    console.log("database id를 찾을 수 없습니다.");
  }
};

export const getPageBlock = async (blockId: string) => {
  if (!blockId) console.log("block id  not found");
  try {
    const response = await notion.blocks.children.list({
      block_id: blockId,
    });
    return response;
  } catch (error) {
    console.log("🚨 getPageBlock error: ", error);
  }
};
