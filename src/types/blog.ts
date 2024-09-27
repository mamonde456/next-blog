import { Timestamp } from "firebase/firestore";

export interface IMeta {
  id: string;
  title: string;
  created_at: Timestamp;
  slog?: string;
  description: string;
  userConfig: Owner;
}

export interface IPost extends IMeta {}

interface Owner {
  displayName: string;
  email: string;
  photoUrl: string;
  uid: string;
}

export interface IIndexedDB {
  [index: string]: any;
  id: string;
  title: string;
  content: string;
  description: string;
}

export interface IFirebasePost {
  id: string;
  title: string;
  description: string;
  content: string;
  created_at: Timestamp | string;
  update_at: Timestamp | string;
  userConfig: {
    displayName: string | null;
    email: string;
    photoUrl: string | null;
    uid: string;
  };
  meta: {
    like: number;
  };
}

export interface IChatRoomInfoType {
  title: string;
  lastMessage: string;
  timestamp: Timestamp;
  chatRoomId: string;
  userList?: IUserListType[];
}

interface IUserListType {
  displayName: string;
  photoUrl: string;
  uid: string;
}

export interface IChatMessagseType {
  id: string;
  message: string;
  name: string;
  timestamp: Timestamp;
  uid: string;
}
