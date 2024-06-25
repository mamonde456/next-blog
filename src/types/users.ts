import { Timestamp } from "firebase/firestore";

export interface IUserInfo {
  email: string;
  displayName: string | null;
  photoUrl: string | null;
  uid: string;
  bio: string | null;
  chatRooms?: IchatRooms[];
}

export interface IchatRooms {
  chatRoomId: string;
  lastMessage: string;
  timestamp: Timestamp;
  title: string;
  userList: [{ uid: string; photoUrl: string; displayName: string }];
}

export interface IGuestBooks extends IUserInfo {
  guestbooks?: IGuestbook[];
}

export interface IGuestbook {
  id: string;
  displayName?: string;
  photoUrl?: string;
  author: string;
  message: string;
  timestamp: Timestamp;
}
