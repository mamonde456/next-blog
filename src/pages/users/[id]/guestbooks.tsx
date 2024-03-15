import MainMenu from "@/components/common/MainMenu";
import MessageInput from "@/components/ui/input/MessageInput";
import {
  Timestamp,
  arrayUnion,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IGuestBooks, IGuestbook, IUserInfo } from "@/types/users";
import { firestore } from "../../../../firebase";
import { v4 as uuidv4 } from "uuid";
import ItemList from "@/components/ui/ItemList";
import { formatTimestampToDateStr } from "@/utils/common";

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

const MSGInputContainer = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  padding: 20px 10px;
`;

const MessageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const GuestContainer = styled.div`
  display: flex;
`;

const GuestProfile = styled.div``;
const GuestText = styled.span``;

export default function Guestbooks() {
  const {
    query: { id },
  } = useRouter();
  const [guestbooks, setGuestbooks] = useState<IGuestbook[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // firestore가 초기화 됐는지 확인
    initFirestore();
    if (!isLoaded) {
      const timer = setTimeout(() => {
        initFirestore();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const initFirestore = () => {
    try {
      const initRef = doc(firestore, "users", id as string);
      console.log("firestore is ready");
      setIsLoaded(true);
    } catch (error) {
      console.log("firestore is not ready");
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    console.log("test ", guestbooks);
  }, [guestbooks]);

  useEffect(() => {
    if (isLoaded) {
      const unsub = onSnapshot(
        doc(firestore, "users", id as string),
        {
          includeMetadataChanges: true,
        },
        (doc) => {
          console.log(doc.data());
          const guestData = doc.data()?.guestbooks;

          console.log(guestData);
          setGuestbooks(guestData);
        }
      );

      return () => unsub();
    } else {
      return console.log("firestore 초기화 중");
    }
  }, [isLoaded]);

  const handleChildData = async (data: string) => {
    const userInfo =
      window.sessionStorage.getItem("userInfo") &&
      JSON.parse(window.sessionStorage.getItem("userInfo") || "");
    const userId = userInfo.uid;
    const guestbooksRef = doc(firestore, `users`, id as string);
    const displayName = userInfo.displayName
      ? userInfo.displayName
      : userInfo.email.split("@")[0];

    await setDoc(
      guestbooksRef,
      {
        guestbooks: arrayUnion({
          id: uuidv4(),
          displayName,
          photoUrl: userInfo.photoUrl,
          author: userId,
          message: data,
          timestamp: Timestamp.fromDate(new Date()),
        }),
      },
      { merge: true }
    );
  };

  return (
    <Wrapper>
      <MainMenu />
      <MainContent>
        <MessageContent>
          {guestbooks?.map((item) => (
            <div key={item.id}>
              <span>{item.displayName}</span>
              <span>{item.photoUrl}</span>
              <span>{item.message}</span>
              <span>{formatTimestampToDateStr(item.timestamp)}</span>
            </div>
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
