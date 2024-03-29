import { Timestamp } from "firebase/firestore";

export interface IMeta {
  [index: string]: {
    id: string;
    title: string;
    created_at: string;
    slog: string;
    description: string;
    userConfig: Owner;
  };
}

export interface IPost extends IMeta {}

interface Owner {
  displayName: string;
  email: string;
  photoUrl: string;
  uid: string;
}

export interface IIndexedDB {
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
  created_at: string;
  update_at: Timestamp;
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
  timestamp: string;
  chatRoomId: string;
}

export interface IChatMessagseType {
  id: string;
  message: string;
  name: string;
  timestamp: Timestamp;
  uid: string;
}
