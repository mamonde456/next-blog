import { Fragment, useEffect, useState } from "react";

export default function Saves() {
  const [postList, setPostList] = useState<{ [key: string]: any }[]>([]);
  useEffect(() => {
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
    <>
      <button onClick={() => handleRemoveSaves()}>모든 임시글 삭제</button>
      {postList?.map((el) => {
        return (
          <Fragment key={el.id}>
            <p>{el.post.title}</p>
          </Fragment>
        );
      })}
    </>
  );
}
