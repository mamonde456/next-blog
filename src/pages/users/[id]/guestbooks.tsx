import MainMenu from "../../../shared/components/MainMenu";
import MessageInput from "../../../components/ui/input/MessageInput";
import { Timestamp } from "firebase/firestore";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IGuestbook } from "../../../types/users";
import { auth } from "../../../../firebase";
import { v4 as uuidv4 } from "uuid";
import { formatTimestampToDateStr } from "../../../utils/common";
import Image from "next/image";
import {
  listenGuestbook,
  sendGuestbook,
} from "../../../features/guestbook/api";

const Wrapper = styled.div`
  width: 100%;
  height: 98%;
  display: flex;
  background: white;
  margin-top: 0.8%;
  border-radius: 10px;
`;

const MainContent = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  /* background-color: #f5f5f5ec; */
`;
const SearchContainer = styled.div`
  flex: 2;
  width: 300px;
  height: 100%;
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

const MSGInputContainer = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  padding: 20px 10px;
  z-index: 1;
`;

const MessageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 10px;
  padding-top: 30px;
`;

const GuestContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  img {
    border-radius: 50%;
  }
`;

const GuestProfile = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 5px;
  /* padding: 5px 10px; */
`;
const GuestTextBox = styled.div`
  word-break: break-all;
`;

export default function Guestbooks() {
  const {
    query: { id },
  } = useRouter();
  const [guestbook, setGuestbook] = useState<IGuestbook[]>([]);

  useEffect(() => {
    type ListenGuestbookType = { guestbook: IGuestbook[]; unsub: any };
    const { guestbook, unsub } = listenGuestbook() as ListenGuestbookType;
    setGuestbook(guestbook);

    return () => {
      unsub();
    };
  }, []);

  const userInfoFormatter = (msg: string) => {
    const user = auth.currentUser;
    const displayName = user?.displayName
      ? user?.displayName
      : user?.email?.split("@")[0];
    const photoURL = user?.photoURL;
    const author = user?.uid;
    const message = msg;
    return {
      id: uuidv4(),
      displayName,
      photoURL,
      author,
      message,
      timestamp: Timestamp.fromDate(new Date()),
    };
  };

  const handleChildData = async (data: string) => {
    const result = await sendGuestbook(userInfoFormatter(data));
    if (!result) {
      console.log("방명록 기록 실패");
    }
  };

  return (
    <Wrapper>
      <MainMenu />
      <MainContent>
        <MessageContent>
          {guestbook?.map((item) => (
            <GuestContainer key={item.id}>
              <Image
                src={item.photoURL || "/blank-profile.svg"}
                width={60}
                height={60}
                alt="사용자의 프로필 이미지"
              />
              <div>
                <GuestProfile>
                  <span>{item.displayName}</span>
                  <small>{formatTimestampToDateStr(item.timestamp)}</small>
                </GuestProfile>
                <GuestTextBox>
                  <span>{item.message}</span>
                </GuestTextBox>
              </div>
            </GuestContainer>
          ))}
        </MessageContent>
        <MSGInputContainer>
          <MessageInput handleChildData={handleChildData} />
        </MSGInputContainer>
      </MainContent>
      <SearchContainer>
        <Search>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <Input placeholder="Search" type="search" className="input" />
        </Search>
      </SearchContainer>
    </Wrapper>
  );
}
