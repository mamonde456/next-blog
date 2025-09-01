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
    const { propertyId } = req.body;
    if (id && typeof id === "string" && propertyId) {
      const response = await notion.pages.properties.retrieve({
        page_id: id,
        property_id: propertyId,
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
