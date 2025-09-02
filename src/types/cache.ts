import { NotionType } from "@/features/blog/api/notion/type";

export interface CacheMeta {
  [id: string]: Meta;
}
export interface Meta {
  id: string;
  icon: string;
  title: string;
  properties: NotionType["properties"];
  created_time: string;
  last_edited_time: string;
  cache_generated_at: string;
  ttl: number;
  in_trash: boolean;
}

export interface CacheSlugMap {
  [id: string]: string;
}
