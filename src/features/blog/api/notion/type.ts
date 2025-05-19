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
}

type titleType = {
  plain_text: string;
};
