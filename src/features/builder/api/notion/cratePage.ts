import { notion } from "@/lib/notion/client";
import { BlockObjectRequest } from "@notionhq/client/build/src/api-endpoints";

type CreatePageParams = {
  parent: {
    database_id: string;
  };
  properties: Record<string, any>;
  children?: BlockObjectRequest[];
};

export async function createPage(params: CreatePageParams) {
  return notion.pages.create(params);
}
