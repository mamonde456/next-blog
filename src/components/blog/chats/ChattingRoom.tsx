import MessageInput from "@/components/ui/input/MessageInput";
import { IChatMessagseType, IChatRoomInfoType } from "@/types/blog";
import { IUserInfo } from "@/types/users";
import { getUserInfoFromSession } from "@/utils/user";
import { child, onValue, push, ref, update } from "firebase/database";
import { Timestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { db } from "../../../../firebase";
import { formatTimestampToDateStr } from "@/utils/common";

const MainContent = styled.div`
  border-left: solid 1px rgba(0, 0, 0, 0.2);
  flex: 4;
  display: flex;
  flex-direction: column;
`;

const MessagesContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: scroll;
  padding: 40px 10px;
`;
const MessageInputContainer = styled.div`
  width: 100%;
  padding: 20px 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
`;

const Message = styled.div<{ $isCurrentUser: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: ${(props) => (props.$isCurrentUser ? "right" : "left")};
  padding: 10px;
`;

interface MessageData {
  uid: string;
  name: string;
  message: string;
  timestamp: Timestamp;
}
export default function ChattingRoom({
  chatMeta,
}: {
  chatMeta: IChatRoomInfoType | undefined;
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IChatMessagseType[]>([]);
  const [currentUser, setCurrentUser] = useState<IUserInfo>();
  const chatMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatMeta) return;
    const chatRef = ref(db, "messages/" + chatMeta?.chatRoomId);
    console.log(chatMeta?.chatRoomId);
    const unsubscribe = onValue(chatRef, (snapshot) => {
      const messagesData = snapshot.val();
      const keys = messagesData && Object.keys(messagesData);
      const result: IChatMessagseType[] =
        keys && keys.length > 0 ? Object.values(messagesData) : [];
      setMessages(result);
    });

    return () => unsubscribe();
  }, [chatMeta?.chatRoomId]);

  useEffect(() => {
    if (chatMessageRef && chatMessageRef.current) {
      chatMessageRef.current.scrollTop = chatMessageRef.current.scrollHeight;
    }
  }, [chatMeta?.chatRoomId, message]);

  useEffect(() => {
    const userInfo = getUserInfoFromSession();
    setCurrentUser(userInfo);
  }, []);
  const handleChildData = (msg: string) => {
    if (!chatMeta) return;
    try {
      console.log(msg);
      console.log(chatMeta);
      setMessage(msg);
      const userInfo: IUserInfo = getUserInfoFromSession();
      const newChatRoomKey = push(
        child(ref(db), "messages" + chatMeta?.chatRoomId)
      ).key;
      const messageData = {
        id: newChatRoomKey,
        uid: userInfo.uid,
        name: userInfo.displayName || "",
        message: msg,
        timestamp: Timestamp.fromDate(new Date()),
      };

      const updates: { [key: string]: MessageData } = {};
      updates["/messages/" + chatMeta?.chatRoomId + "/" + newChatRoomKey] =
        messageData;
      console.log(updates);
      return update(ref(db), updates);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContent>
      <MessagesContent ref={chatMessageRef}>
        {messages?.map((message) => (
          <Message
            $isCurrentUser={currentUser?.uid === message.uid}
            key={message.id}
          >
            <span>{message.name}</span>
            <span>{message.message}</span>
            <span>{formatTimestampToDateStr(message.timestamp)}</span>
          </Message>
        ))}
      </MessagesContent>
      <MessageInputContainer>
        <MessageInput handleChildData={handleChildData} />
      </MessageInputContainer>
    </MainContent>
  );
}
