export interface CacheMeta {
  [id: string]: Meta;
}
export interface Meta {
  title: string;
  created_time: string;
  last_edited_time: string;
  cache_generated_at: string;
  ttl: number;
  in_trash: boolean;
}

export interface CacheSlugMap {
  [id: string]: string;
}
