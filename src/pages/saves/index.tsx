import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
`;

const RemoveBtn = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: solid 2px #675555;
  box-sizing: border-box;
  /* background: #b89191; */
  /* color: white; */
`;

const SaveBox = styled.div`
  width: 100%;
  /* display: flex; */
  /* gap: 10px; */
  padding: 10px;
`;

const Box = styled.div`
  border-radius: 10px;
  background: #ece6e6;
  padding: 10px;
  margin: 20px;
  text-align: center;
  overflow: hidden;
`;
export default function Saves() {
  const [postList, setPostList] = useState<{ [key: string]: any }[]>([]);
  const router = useRouter();
  useEffect(() => {
    setPostList([]);
    if (!window) {
      alert(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
    } else {
      // window.indexedDB = window.indexedDB;
      // window.IDBTransaction = window.IDBTransaction;
      // window.IDBKeyRange = window.IDBKeyRange;
      const open = window.indexedDB.open("test", 2);
      open.onerror = function (e) {
        console.log("error ", e);
      };
      open.onupgradeneeded = function (e) {
        const db = open.result;
        db.createObjectStore("MyObjectStore", { keyPath: "id" });
      };
      open.onsuccess = function () {
        const db = open.result;
        const tx = db.transaction("MyObjectStore", "readonly");
        const store = tx.objectStore("MyObjectStore");

        // get the post data
        const request = store.openCursor();
        request.onsuccess = function (e: any) {
          const cursor = e.target.result;
          if (cursor) {
            if (
              postList.some((post) => post.id !== cursor.value.id) ||
              postList.length <= 0
            ) {
              setPostList((prev) => [...prev, cursor.value]);
            }
            cursor.continue();
          }
        };
        db.close();
      };
    }
    return () => {};
  }, []);

  const handleRemoveSaves = () => {
    const open = window.indexedDB.open("test", 2);
    open.onerror = function (e) {
      console.log("error ", e);
    };
    open.onupgradeneeded = function (e) {
      const db = open.result;
      db.createObjectStore("MyObjectStore", { keyPath: "id" });
    };
    open.onsuccess = function () {
      const db = open.result;
      const tx = db.transaction("MyObjectStore", "readwrite");
      const store = tx.objectStore("MyObjectStore");

      const clearRequest = store.clear();

      clearRequest.onsuccess = function (e) {
        alert("모든 임시글이 삭제되었습니다.");
        setPostList([]);

        db.close();
      };
    };
  };
  return (
    <Wrapper>
      <RemoveBtn onClick={() => handleRemoveSaves()}>
        모든 임시글 삭제
      </RemoveBtn>
      <SaveBox>
        {postList?.map((el) => {
          return (
            <Box key={el.id}>
              <span
                onClick={() =>
                  router.push({
                    pathname: `/write/${el.id}`,
                    query: { action: "draft" },
                  })
                }
              >
                {el.post.title}
              </span>
            </Box>
          );
        })}
      </SaveBox>
    </Wrapper>
  );
}
