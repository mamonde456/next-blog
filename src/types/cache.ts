export interface MetaDataMap {
  [index: string]: {
    title: string;
    created_time: string;
    last_edited_time: string;
    cache_generated_at: string;
    ttl: number;
    in_trash: boolean;
  };
}
