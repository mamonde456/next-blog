import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;
const Form = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
`;
const TextEditor = styled.textarea`
  height: 500px;
`;
const BtnBox = styled.div`
  text-align: right;
`;
const TextPriveiw = styled.div``;

const BackBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;
export default function Write() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
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
            console.log(cursor.value.post);
            console.log(router);

            if (cursor.key === router.query.id) {
              setTitle(cursor.value.post.title);
              setText(cursor.value.post.text);
            }
            cursor.continue();
          }
        };
      };
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    savePost(title, text);
  };
  async function savePost(title: string, data: string) {
    const response = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content: data }),
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    return await response.json();
  }

  const handleSave = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          type="text"
          name="title"
          required
          defaultValue={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        ></input>
        <label>content</label>
        <TextEditor
          name="text"
          required
          defaultValue={text}
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <BtnBox>
          <button onClick={(e) => handleSave(e)}>임시저장</button>
          <input type="submit" value="업로드"></input>
        </BtnBox>
      </Form>
      <TextPriveiw>
        <h1>{title}</h1>
        <ReactMarkdown>{text}</ReactMarkdown>
      </TextPriveiw>
      <BackBtn onClick={() => router.push("/")}>{"< 뒤로가기"}</BackBtn>
    </Wrapper>
  );
}
