import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_TOKEN });
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

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
      // const response = await fetch("/api/notion/getQuery");
      const response = await fetch("/api/notion/getQuery");

      return await response.json();
    } catch (error) {
      console.log("🚨 get upload database query error: ", error);
    }
  } else {
    console.log("database id를 찾을 수 없습니다.");
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
