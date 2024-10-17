import { FieldValue, Timestamp } from "firebase/firestore";

export interface IMeta {
  id: string;
  title: string;
  created_at: Timestamp;
  slog?: string;
  description: string;
  userConfig: Owner;
}

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
  createdAt: Timestamp | FieldValue;
  userConfig: Owner;
}

export interface IFirebasePost {
  id: string;
  title: string;
  description: string;
  content: string;
  created_at: Timestamp | string;
  update_at: Timestamp | string;
  userConfig: Owner;
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
