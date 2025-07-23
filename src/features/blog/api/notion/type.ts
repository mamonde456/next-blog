export interface NotionType {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  cover: {
    type: string;
    external: {
      url: string;
    };
  } | null;
  icon: { type: string; emoji: string };
  properties: { 이름: { title: titleType[] } };
  in_trash: boolean;
}

type titleType = {
  plain_text: string;
};

export interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: null;
  icon: {
    type: string;
    emoji: string;
  };
  parent: {
    type: string;
    database_id: string;
  };
  archived: true;
  in_trash: true;
  properties: {
    "Due date": {
      id: string;
      type: string;
      date: {
        start: string;
        end: null;
        time_zone: null;
      };
    };
    Status: {
      id: string;
      type: string;
      status: {
        id: string;
        name: string;
        color: string;
      };
    };
    이름: {
      id: string;
      type: string;
      title: [
        {
          type: string;
          text: {
            content: string;
            link: null;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: null;
        }
      ];
    };
  };
}

export interface postMeta {
  [id: string]: {
    title: string;
    created_time: string;
    last_edited_time: string;
    cache_generated_at: string;
    ttl: number;
    in_trash: boolean;
  };
}
