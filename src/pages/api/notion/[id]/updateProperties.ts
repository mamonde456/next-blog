import { Client } from "@notionhq/client";
import { NOTION_TOKEN } from "const";
import { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: NOTION_TOKEN });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;
    const { views } = req.body;
    if (id && typeof id === "string") {
      const response = await notion.pages.update({
        page_id: id,
        properties: {
          views,
        },
      });

      res.status(200).json(response);
    }
    res
      .status(500)
      .json({ error: "getPage handler: page id가 없습니다. id: " + id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
}
