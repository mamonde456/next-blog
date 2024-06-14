import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { auth, firestore } from "../../../firebase";
import {
  Timestamp,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import useAuth from "@/hook/useAuth";
import { getKoreanTime } from "@/utils/common";
import { v4 as uuidv4 } from "uuid";
import { checkAuthentication } from "@/utils/auth";
import { IIndexedDB } from "@/types/blog";
import BasicButton from "@/components/ui/button/BasicButton";
import SubmitButton from "@/components/ui/button/SubmitButton";
import BackButton from "@/components/ui/button/BackButton";
import { saveDraftToIndexedDB } from "@/utils/\bblog";

const Wrapper = styled.div`
  /* display: flex;
  height: 100%;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 98%;
  display: flex;
  gap: 10px;
  background: white;
  margin-top: 0.8%;
  border-radius: 10px;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 10px;
  .title {
    height: 50px;
    font-size: 24px;
  }
`;
const InputLabel = styled.div`
  /* color: white; */
  /* opacity: 0.7; */
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.4);
  -webkit-transition: ease 0.2s;
`;
const InputBox = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  &:focus + input {
    border: none;
  }
  input {
    width: 100%;
    height: 100%;
    font-size: 22px;
    background: none;
    text-indent: 10px;
    border: solid 1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    &:focus {
      outline: none;
      border: solid 1px #36c2597f;
    }
    &:focus + ${InputLabel} {
      top: -8px;
      background-color: #ffffff;
      font-size: 14px;
      color: #36c259;
    }
    &:not(:placeholder-shown) + ${InputLabel} {
      top: -8px;
      background-color: white;
      font-size: 14px;
    }
  }
`;

const TextEditor = styled.textarea`
  height: 550px;
  resize: none;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: solid 1px #36c2597f;
  }
`;

const BtnBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: right;
  gap: 10px;
`;
const TextPriveiw = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  /* position: relative; */
  /* background-image: url("/notebook.jpg"); */
  /* background-size: cover; */
`;
const TextContents = styled.div`
  width: 100%;
  max-width: 570px;
  height: 540px;
  overflow-y: scroll;
  word-break: break-all;
  /* position: absolute;
  top: 100px;
  left: 100px; */
  line-height: 23px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
`;
const Title = styled.h1`
  width: 100%;
  max-width: 570px;
  height: 60px;
  padding: 10px;
  word-break: break-all;
  margin-bottom: 20px;
  overflow-x: auto;
  white-space: nowrap;
  /* position: absolute; */
  /* top: 10px; */
  /* left: 110px; */
`;
const Description = styled.div`
  width: 100%;
  max-width: 570px;
  height: 60px;
  padding: 10px;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 20px;
`;
const BackBtnContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 20px;
`;
export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { action, id: params } = router.query;
  const isLoggedIn = useAuth();
  // console.log(isLoggedIn);

  useEffect(() => {
    setContent("");
    setTitle("");
    (async () => {
      const isUserAuthenticated = await checkAuthentication();
      if (!isUserAuthenticated) {
        // alert("비회원으로 작성된 글은 로컬에 저장되어 유실될 수 있습니다.");
      }
      checkPostExists(isUserAuthenticated);
      autoSaveDraft(); // 5분마다 임시글 자동 저장
    })();
  }, []);

  const checkPostExists = async (isLoggedIn: boolean) => {
    if (action === "new") {
      return;
    } else if (action === "edit") {
      // 기존 글 가져오기
      if (isLoggedIn) {
        getPostById();
      } else {
        const response = await fetch(`/api/posts?id=${params}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const [mata, content] = await response.json();
        console.log(mata, content);
        setTitle(mata.title);
        setDescription(mata.description);
        setContent(content);
      }
    } else if (action === "draft") {
      // 임시 글 가져오기
      getDraftFromIndexDB();
    }
  };

  const getPostById = async () => {
    const docRef = doc(firestore, "posts", `${params}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      const decodedText = decodeURIComponent(data.content);
      setContent(decodedText);
      setTitle(data.title);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getDraftFromIndexDB = () => {
    if (window) {
      const open = indexedDB.open("posts", 1);
      open.onupgradeneeded = function () {
        const db = open.result;
        db.createObjectStore("MyObjectStore", { keyPath: "id" });
      };

      open.onsuccess = function () {
        const db = open.result;
        const tx = db.transaction("MyObjectStore", "readonly");
        const store = tx.objectStore("MyObjectStore");

        const request = store.openCursor();
        request.onsuccess = function (e: any) {
          const cursor = e?.target?.result;
          if (cursor) {
            if (cursor.key === router.query.id) {
              setTitle(cursor.value.title);
              setDescription(cursor.value.description);
              setContent(cursor.value.content);
            }
            cursor.continue();
          }
        };
      };
    }
  };

  const autoSaveDraft = () => {
    if (!title && !content) return;
    const config: IIndexedDB = {
      id: params as string,
      title,
      content,
      description,
    };
    const time = 1000 * 60 * 5; // 5분
    const timer = setTimeout(() => {
      saveDraftToIndexedDB(config);
    }, time);
    return () => clearTimeout(timer);
  };

  const sendPostToFirebase = async () => {
    const encodedText = encodeURIComponent(content);

    const user = auth.currentUser;
    if (user) {
      const userConfig = {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
      };
      try {
        await setDoc(doc(firestore, "posts", `${params}`), {
          id: params,
          title,
          created_at: Timestamp.fromDate(new Date()),
          description,
          content: encodedText,
          userConfig,
          meta: {
            like: 0,
          },
        });
        const docRef = doc(firestore, "posts", `${params}`);
        await updateDoc(docRef, {
          update_at: serverTimestamp(),
        });
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const isUserAuthenticated = await checkAuthentication();
    if (isLoggedIn) {
      sendPostToFirebase();
    } else {
      createLocalPostFile();
    }
  };
  async function createLocalPostFile() {
    // const user = auth.currentUser;
    // if (!user) return;
    const userConfig = {
      // displayName: user.displayName,
      // email: user.email,
      // photoUrl: user.photoURL,
      uid: uuidv4(),
    };
    console.log(userConfig);

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params,
        title,
        description,
        content,
        userConfig,
      }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    } else if (response.ok) {
      router.push("/");
      setContent("");
      setTitle("");
    }

    return await response.json();
  }

  const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const config: IIndexedDB = {
      id: params as string,
      title,
      content,
      description,
    };
    saveDraftToIndexedDB(config);
    router.push("/saves");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputBox>
          <input
            type="text"
            name="title"
            autoComplete="off"
            placeholder=" "
            required
            defaultValue={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <InputLabel>title</InputLabel>
        </InputBox>
        <InputBox>
          <input
            type="text"
            name="description"
            placeholder=" "
            required
            defaultValue={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <InputLabel>description</InputLabel>
        </InputBox>
        <label>content</label>
        <TextEditor
          required
          defaultValue={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <BtnBox>
          <BasicButton type="button" onClick={(e) => handleSave(e)}>
            임시저장
          </BasicButton>
          <SubmitButton onClick={() => handleSubmit} />
        </BtnBox>
      </Form>
      <TextPriveiw>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TextContents>
          <ReactMarkdown>{content}</ReactMarkdown>
        </TextContents>
      </TextPriveiw>
      <BackBtnContainer onClick={() => router.push("/")}>
        <BackButton />
      </BackBtnContainer>
    </Wrapper>
  );
}
