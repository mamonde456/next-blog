import { Timestamp } from "firebase/firestore";

export interface IUserInfo {
  email: string;
  displayName: string | null;
  photoUrl: string | null;
  uid: string;
  bio: string | null;
}

export interface IGuestBooks extends IUserInfo {
  guestbooks: IGuestbook[];
}

export interface IGuestbook {
  author: string;
  message: string;
  timestamp: Timestamp;
}
