import MainMenu from "@/components/common/MainMenu";
import MessageInput from "@/components/ui/input/MessageInput";
import { child, push, set, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db, firestore } from "../../../../firebase";
import { v4 as uuidv4 } from "uuid";
import {
  Timestamp,
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import {
  getAllUserData,
  getUserInfoFromSession,
  updateUserInfoFromSession,
} from "@/utils/user";
import { IUserInfo } from "@/types/users";
import ChattingRoom from "@/components/blog/\bchats/ChattingRoom";
import { IChatRoomInfoType } from "@/types/blog";

const Wrapper = styled.div`
  /* display: flex;
  height: 100%;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 98%;
  display: flex;
  background: white;
  margin-top: 0.8%;
  border-radius: 10px;
`;

const SideMenuList = styled.div`
  flex: 2;
  width: 300px;
  height: 100%;
  /* background: yellow; */
`;

const Search = styled.div`
  width: 100%;
  padding: 10px;
  height: 10%;
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  svg {
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
  &::placeholder {
    color: #9e9ea7;
  }
  &:focus,
  &:hover {
    outline: none;
    border-color: rgba(76, 84, 234, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(76 84 234 / 10%);
  }
`;

const UserListContainer = styled.div`
  display: flex;
`;
const Users = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
const User = styled.li`
  width: 100%;
  display: flex;
  gap: 10px;
  /* justify-content: center; */
  align-items: center;
  padding: 5px;
  &:hover {
    background-color: #eeee;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 1px rgba(0, 0, 0, 0.2);
`;

const UserName = styled.div``;

export default function Chats() {
  const [users, setUsers] = useState<IUserInfo[]>([]);
  // const [chatUsers, setChatUsers] = useState<string[]>([]);
  const [chatUser, setChatUser] = useState<IUserInfo>();
  const [showChatRoom, setShowChatRoom] = useState(false);
  const [chatMeta, setChatMeta] = useState<IChatRoomInfoType>();

  const [chatRoomInfo, setChatRoomInfo] = useState<IChatRoomInfoType[]>();

  useEffect(() => {
    (async () => {
      const users = await getAllUserData();
      if (users && Object.keys(users).length > 0) {
        setUsers(users);
      } else {
        console.log("사용자를 찾을 수 없습니다.");
      }
      const userInfoSession = getUserInfoFromSession();
      const unsub = onSnapshot(
        doc(firestore, "users", userInfoSession.uid),
        (doc) => {
          const userInfo = doc.data();
          if (userInfo) {
            const chatRoom = userInfo.chatRooms;
            setChatRoomInfo(chatRoom);
          }
        }
      );
      return () => unsub();
    })();
  }, []);

  const createChatRoom = async (selectedUser: IUserInfo) => {
    const userInfo: IUserInfo = await updateUserInfoFromSession();
    const existingChatRoom = userInfo.chatRooms?.find((chatRoom) => {
      return chatRoom.userList.some(
        (chatUser) => chatUser.uid === selectedUser.uid
      );
    });
    if (existingChatRoom) {
      console.log("이미 동일한 채팅방 존재");
      return;
    }
    createMetaChats(userInfo, selectedUser);
  };

  const createMetaChats = (userInfo: IUserInfo, selectedUser: IUserInfo) => {
    if (chatUser) {
      const chatRoomId = uuidv4();

      const userId = userInfo.uid;
      const userChatRoomsRef = doc(firestore, "users", userId);
      const selectedUserChatRoomRef = doc(firestore, "users", chatUser.uid);
      const currentMetaData = {
        title: chatUser.displayName,
        lastMessage: "",
        timestamp: Timestamp.fromDate(new Date()),
        chatRoomId,
        userList: [
          {
            displayName: chatUser.displayName,
            uid: chatUser.uid,
            photoUrl: chatUser.photoUrl,
          },
        ],
      };

      const anotherMetaData = {
        title: userInfo.displayName,
        lastMessage: "",
        timestamp: Timestamp.fromDate(new Date()),
        chatRoomId,
        userList: [
          {
            displayName: chatUser.displayName,
            uid: chatUser.uid,
            photoUrl: chatUser.photoUrl,
          },
        ],
      };
      if (userInfo.uid === selectedUser.uid) {
        setDoc(
          userChatRoomsRef,
          { chatRooms: arrayUnion(currentMetaData) },
          { merge: true }
        );
      } else {
        setDoc(
          userChatRoomsRef,
          { chatRooms: arrayUnion(currentMetaData) },
          { merge: true }
        );
        setDoc(
          selectedUserChatRoomRef,
          { chatRooms: arrayUnion(anotherMetaData) },
          { merge: true }
        );
      }
    }
  };

  const handleSelectedUser = (user: IUserInfo) => {
    setChatUser(user);
    createChatRoom(user);
  };

  const handleSelectedChat = (chat: IChatRoomInfoType) => {
    setShowChatRoom((prev) => !prev);
    setChatMeta(chat);
  };
  return (
    <Wrapper>
      <MainMenu />
      <SideMenuList>
        <Search>
          <Input />
        </Search>
        <UserListContainer>
          <Users>
            {users?.map((user) => (
              <User key={user.uid} onClick={() => handleSelectedUser(user)}>
                <ProfileImg>{user.photoUrl}</ProfileImg>
                <UserName>{user.displayName}</UserName>
              </User>
            ))}
            {chatRoomInfo?.map((chat) => (
              <User
                key={chat.chatRoomId}
                onClick={() => handleSelectedChat(chat)}
              >
                <UserName>{chat.title}</UserName>
                <div>{chat.lastMessage}</div>
              </User>
            ))}
          </Users>
        </UserListContainer>
      </SideMenuList>
      {showChatRoom && <ChattingRoom chatMeta={showChatRoom && chatMeta} />}
    </Wrapper>
  );
}
