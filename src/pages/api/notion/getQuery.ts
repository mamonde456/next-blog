import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_TOKEN });
const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (databaseId) {
      const response = await notion.databases.query({
        database_id: databaseId as string,
        filter: {
          property: "upload",
          select: {
            equals: "Published",
          },
        },
      });
      res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
}
