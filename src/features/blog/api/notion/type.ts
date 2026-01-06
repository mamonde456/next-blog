import { PropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface NotionQueries {
  results: NotionQuery[];
}
export interface NotionQuery {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: [Object];
  last_edited_by: [Object];
  cover: null;
  icon: [Object];
  parent: [Object];
  archived: false;
  in_trash: false;
  is_locked: false;
  properties: [Object];
  url: string;
  public_url: string;
}

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
  properties: { [index: string]: any };
  in_trash: boolean;
  views?: {
    id: string;
    type: string;
    number: number;
  };
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
    [index: string]: any;
    views: {
      id: string;
      type: string;
      number: number;
    };
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

export interface NotionProperties {
  object: string;
  results: PropertyItemObjectResponse[];
  next_cursor?: string;
  has_more: boolean;
  next_url?: string;
  property_item?: any;
}

export interface PropertiesResults {
  object: string;
  type: string;
  id: string;
  number: any;
  request_id: string;
}
