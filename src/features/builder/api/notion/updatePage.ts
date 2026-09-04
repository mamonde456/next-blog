import { notion } from "@/lib/notion/client";

type PageParams = {
  page_id: string;
  properties: Record<string, any>;
};

export const updatePage = async (params: PageParams) => {
  return await notion.pages.update(params);
};
