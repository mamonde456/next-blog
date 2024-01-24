import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled, { createGlobalStyle } from "styled-components";
import { auth, firestore } from "../../../firebase";
import RequireAuth from "@/components/common/RequireAuth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import useAuth from "@/hook/useAuth";

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  border-right: solid 1px black;
  position: relative;
  .title {
    height: 50px;
    font-size: 24px;
  }
`;
const TextEditor = styled.textarea`
  height: 550px;
`;

const BtnBox = styled.div`
  text-align: right;
`;
const TextPriveiw = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("/notebook.jpg");
  background-size: cover;
`;
const TextContents = styled.div`
  width: 100%;
  max-width: 370px;
  max-height: 450px;
  overflow-y: scroll;
  word-break: break-all;
  position: absolute;
  top: 100px;
  left: 100px;
  line-height: 23px;
`;
const Title = styled.h1`
  width: 100%;
  max-width: 350px;
  max-height: 85px;
  overflow-y: scroll;
  padding: 10px;
  word-break: break-all;
  margin-bottom: 20px;
  position: absolute;
  top: 10px;
  left: 110px;
`;

const BackBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;
export default function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { action, id: params } = router.query;
  const isLoggedIn = useAuth();

  useEffect(() => {
    setContent("");
    setTitle("");
    // autoSaveDraft() // 5분마다 임시글 자동 저장
    checkPostExists();
  }, []);

  const checkPostExists = async () => {
    if (action === "new") {
      return;
    } else if (action === "edit") {
      // 기존 글 가져오기
      // getPostById()
      const response = await fetch(`/api/blog?id=${params}`, {
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
    } else if (action === "draft") {
      // 임시 글 가져오기
      // getDraftFromIndexDB()
    }
  };

  const getPostById = async () => {
    const docRef = doc(firestore, "blog", `${params}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      setContent(data.content);
      setTitle(data.title);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const getDraftFromIndexDB = () => {
    if (window) {
      const open = indexedDB.open("test", 2);
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
              setTitle(cursor.value.post.title);
              setContent(cursor.value.post.text);
            }
            cursor.continue();
          }
        };
      };
    }
  };

  const autoSaveDraft = () => {
    const time = 1000 * 60 * 5; // 5분
    const timer = setTimeout(() => {
      saveDraftToIndexedDB();
    }, time);
    return () => clearTimeout(timer);
  };

  const sendPostToFirebase = async (title: string, content: string) => {
    const user = auth.currentUser;
    if (!isLoggedIn) return;
    if (user) {
      const userConfig = {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
      };
      await setDoc(doc(firestore, "blog", `${params}`), {
        id: params,
        title,
        content,
        userConfig,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // sendPostToFirebase(title, content);
    createLocalPostFile(title, content);
  };
  async function createLocalPostFile(title: string, data: string) {
    const user = auth.currentUser;
    if (!user) return;
    const userConfig = {
      displayName: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      uid: user.uid,
    };
    console.log(userConfig);

    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: params,
        title,
        description,
        content: data,
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

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    saveDraftToIndexedDB();
  };

  const saveDraftToIndexedDB = () => {
    // indexedDB에 임시 저장
    if (!window) {
      alert(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
    } else {
      // window.indexedDB = window.indexedDB;
      // window.IDBTransaction = window.IDBTransaction;
      // window.IDBKeyRange = window.IDBKeyRange;
      const req = window.indexedDB.open("test", 2);
      req.onerror = function (e) {
        console.log("error ", e);
      };
      req.onupgradeneeded = function (e) {
        console.log("su", e);
        // Save the IDBDatabase interface
        const db = req.result;
        // Create an objectStore for this database
        const store = db.createObjectStore("MyObjectStore", { keyPath: "id" });
        store.createIndex("postIndex", "post");
      };
      req.onsuccess = function () {
        const db = req.result;
        const tx = db.transaction("MyObjectStore", "readwrite");
        const store = tx.objectStore("MyObjectStore");

        // add post data
        store.put({ id: router.query.id, post: { title, text } });

        //query the post data
        const request = store.openCursor();

        request.onsuccess = function (e: any) {
          const cursor = e?.target?.result;

          if (cursor) {
            console.log(
              `Key: ${cursor.key}, Value: ${JSON.stringify(cursor.value)}`
            );

            // Move to the next item in the store
            cursor.continue();
          } else {
            console.log("All items have been displayed");
          }

          db.close();
        };
      };
    }
  };
  return (
    <RequireAuth>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <label>title</label>
          <input
            type="text"
            // className="title"
            required
            defaultValue={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          ></input>
          <label>
            description
            <input
              type="text"
              // className="description"
              required
              defaultValue={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            ></input>
          </label>
          <label>content</label>
          <TextEditor
            required
            defaultValue={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <BtnBox>
            <button type="button" onClick={(e) => handleSave(e)}>
              임시저장
            </button>
            <input type="submit" value="업로드"></input>
          </BtnBox>
        </Form>
        <TextPriveiw>
          <Title>{title}</Title>
          <TextContents>
            <ReactMarkdown>{content}</ReactMarkdown>
          </TextContents>
        </TextPriveiw>
        <BackBtn onClick={() => router.push("/")}>{"< 뒤로가기"}</BackBtn>
      </Wrapper>
    </RequireAuth>
  );
}
