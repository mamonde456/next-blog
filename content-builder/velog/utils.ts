import { notion } from "@/lib/notion/client";
import { VELOG_DATABASE_ID } from "const";

export const chunkText = (text: string, maxLength = 2000) => {
  const chunks: string[] = [];

  for (let i = 0; i < text.length; i += maxLength) {
    chunks.push(text.slice(i, i + maxLength));
  }

  return chunks;
};

export const findVelogPost = async (sourcePageId: string) => {
  if (!VELOG_DATABASE_ID) {
    throw new Error("벨로그용 database id를 env에서 읽어오지 못했습니다.");
  }
  const response = await notion.databases.query({
    database_id: VELOG_DATABASE_ID,
    filter: {
      property: "Source Page ID",
      rich_text: {
        equals: sourcePageId,
      },
    },
  });

  return response.results[0];
};
