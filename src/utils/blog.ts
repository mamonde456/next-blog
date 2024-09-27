import { IFirebasePost, IIndexedDB, IMeta } from "@/types/blog";
import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { firestore } from "../../firebase";

// indexedDB에 임시 저장
export const saveDraftToIndexedDB = (post: IIndexedDB) => {
  if (!window) {
    alert(
      "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
    );
  } else {
    // window.indexedDB = window.indexedDB;
    // window.IDBTransaction = window.IDBTransaction;
    // window.IDBKeyRange = window.IDBKeyRange;
    const req = window.indexedDB.open("posts", 1);
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
      console.log("save", store);

      // add post data
      store.put(post);
      // store.put({ id: router.query.id, post: { title, content } });

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

// indexedDB 에서 데이터 꺼내기
export const getDraftFromIndexDB = () => {
  if (window) {
    const indexDBValueArr: IIndexedDB[] = [];
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
      request.onsuccess = function (e: Event) {
        const request = e?.target as IDBRequest;
        const cursor = request.result as IDBCursorWithValue;
        if (cursor) {
          // const key = cursor.key as string;
          const value = cursor.value;
          const indexedDBObject: IIndexedDB = {
            id: value.id,
            title: value.title,
            content: value.content,
            description: value.description,
          };

          indexDBValueArr.push(indexedDBObject);
          // if (cursor.key === router.query.id) {
          //   setTitle(cursor.value.post.title);
          //   setContent(cursor.value.post.text);
          // }
          cursor.continue();
        }
      };
    };
    return indexDBValueArr;
  }
};

// firebase 함수

export const getAllPostsFromFirebase = async () => {
  const postsRef = collection(firestore, "posts");
  const q = query(postsRef, orderBy("created_at", "desc"));
  const querySnapshot = await getDocs(q);
  if (querySnapshot) {
    const posts: IFirebasePost[] = [];
    querySnapshot.forEach((doc) => {
      const title = doc.data().title;
      const content = doc.data().content;
      const decodedText = decodeURIComponent(title);
      const decodedContent = decodeURIComponent(content);
      doc.data().title = decodedText;
      doc.data().content = decodedContent;
      posts.push(doc.data() as IFirebasePost);
    });
    return posts;
  } else {
    return null;
  }
};

export const getPostById = async (id: string) => {
  const docRef = doc(firestore, "posts", `${id}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const firebaseData = docSnap.data();
    const meta: IMeta = {
      id: firebaseData.id,
      title: firebaseData.title,
      description: firebaseData.description,
      created_at: firebaseData.created_at,
      userConfig: firebaseData.userConfig,
    };
    const decodedText = decodeURIComponent(firebaseData.content);
    return { meta, content: decodedText };
  } else {
    console.log("No such document!");
  }
};
