import { IFirebasePost, IIndexedDB, IMeta } from "@/types/blog";
import {
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, firestore } from "../../firebase";

// 임시글 관련 함수

// indexedDB에 임시 저장
export const setDraftToIndexedDB = (post: IIndexedDB) => {
  return new Promise((resolve, rejects) => {
    if (!window) {
      alert(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
    } else {
      const req = window.indexedDB.open("MyObjectStore", 1);
      req.onerror = function (e) {
        console.log("indexedDB open error ", e);
      };
      req.onupgradeneeded = function (e) {
        const db = req.result;
        const store = db.createObjectStore("Drafts", { keyPath: "id" });
        store.createIndex("DraftIndex", "Draft");
      };
      req.onsuccess = function () {
        const db = req.result;
        const tx = db.transaction("Drafts", "readwrite");
        const store = tx.objectStore("Drafts");

        const putReq = store.put(post);

        // const request = store.openCursor();

        putReq.onsuccess = function () {
          resolve(true);
          db.close();
        };

        putReq.onerror = function () {
          rejects(false);
          db.close();
        };
      };
    }
  });
};

// indexedDB 에서 데이터 꺼내기
export const getDraftFromIndexDB = () => {
  return new Promise((resolve, rejects) => {
    if (window) {
      const indexDBValueArr: IIndexedDB[] = [];
      const open = indexedDB.open("MyObjectStore", 1);
      open.onupgradeneeded = function () {
        const db = open.result;
        db.createObjectStore("Drafts", { keyPath: "id" });
      };

      open.onsuccess = function () {
        const db = open.result;
        const tx = db.transaction("Drafts", "readonly");
        const store = tx.objectStore("Drafts");

        const request = store.openCursor();

        request.onsuccess = function (e: Event) {
          const request = e?.target as IDBRequest;
          const cursor = request.result as IDBCursorWithValue;
          if (cursor) {
            const value = cursor.value;
            const indexedDBObject: IIndexedDB = {
              id: value.id,
              title: value.title,
              content: value.content,
              description: value.description,
              createdAt: value.createdAt,
              userConfig: value.userConfig,
            };

            indexDBValueArr.push(indexedDBObject);
            cursor.continue();
          } else {
            resolve(indexDBValueArr);
          }
        };

        request.onerror = function (e) {
          console.log(e);
          rejects(false);
        };

        tx.oncomplete = function () {
          db.close();
        };
      };
    }
  });
};

export const getDraftByIdFromIndexDB = (id: string) => {
  return new Promise((resolve, rejects) => {
    if (window) {
      const indexDBValueArr: IIndexedDB[] = [];
      const open = indexedDB.open("MyObjectStore", 1);
      open.onupgradeneeded = function () {
        const db = open.result;
        db.createObjectStore("Drafts", { keyPath: "id" });
      };

      open.onsuccess = function () {
        const db = open.result;
        const tx = db.transaction("Drafts", "readonly");
        const store = tx.objectStore("Drafts");

        const request = store.openCursor();

        request.onsuccess = function (e: Event) {
          const request = e?.target as IDBRequest;
          const cursor = request.result as IDBCursorWithValue;
          if (cursor) {
            const value = cursor.value;
            const indexedDBObject: IIndexedDB = {
              id: value.id,
              title: value.title,
              content: value.content,
              description: value.description,
              createdAt: value.createdAt,
              userConfig: value.userConfig,
            };

            indexDBValueArr.push(indexedDBObject);
            cursor.continue();
          } else {
            const findDraft = indexDBValueArr.find((draft) => draft.id === id);
            resolve(findDraft);
          }
        };

        request.onerror = function (e) {
          console.log(e);
          rejects(false);
        };

        tx.oncomplete = function () {
          db.close();
        };
      };
    }
  });
};

//IndexedDB의 모든 임시글 삭제

export const removeAllDraftsFromIndexedDB = () => {
  return new Promise((resolve, rejects) => {
    const open = window.indexedDB.open("MyObjectStore", 1);
    open.onerror = function (e) {
      console.log("error ", e);
    };
    open.onupgradeneeded = function (e) {
      const db = open.result;
      db.createObjectStore("Drafts", { keyPath: "id" });
    };
    open.onsuccess = function () {
      const db = open.result;
      const tx = db.transaction("Drafts", "readwrite");
      const store = tx.objectStore("Drafts");

      const clearRequest = store.clear();
      clearRequest.onsuccess = function (e) {
        db.close();
        resolve(true);
      };

      clearRequest.onerror = function () {
        db.close();
        rejects(false);
      };
    };
  });
};

// indexedDB에서 특정 임시글 삭제
export const removeDraftByIdFromIndexedDB = (id: string) => {
  return new Promise((resolve, rejects) => {
    const open = window.indexedDB.open("MyObjectStore", 1);
    open.onerror = function (e) {
      console.log("error ", e);
    };
    open.onupgradeneeded = function (e) {
      const db = open.result;
      db.createObjectStore("Drafts", { keyPath: "id" });
    };
    open.onsuccess = function () {
      const db = open.result;
      const tx = db.transaction("Drafts", "readwrite");
      const store = tx.objectStore("Drafts");

      const deleteRequest = store.delete(id);
      deleteRequest.onsuccess = function (e) {
        db.close();
        resolve(true);
      };

      deleteRequest.onerror = function () {
        db.close();
        rejects(false);
      };
    };
  });
};

// firebase store 에서 모든 임시글 불러오기
export const getAllDraftsFromFirebase = async () => {
  const draftsRef = collection(firestore, "drafts");
  const q = query(draftsRef, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  if (querySnapshot) {
    const drafts: IIndexedDB[] = [];
    querySnapshot.forEach((doc) => {
      const title = doc.data().title;
      const content = doc.data().content;
      const decodedText = decodeURIComponent(title);
      const decodedContent = decodeURIComponent(content);
      doc.data().title = decodedText;
      doc.data().content = decodedContent;
      drafts.push(doc.data() as IIndexedDB);
    });
    return drafts;
  } else {
    return null;
  }
};

// firebase store 저장소에 임시글 저장하기

const setDraftToFirebase = async (id: string, obj: any) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await setDoc(doc(firestore, "drafts", `${id}`), obj);
      return true;
    } catch (error) {
      console.log(
        "🚨 " + id + " 임시글 저장에 실패하셨습니다. 다시 시도해주세요.",
        error
      );
      return false;
    }
  } else {
    return false;
  }
};

// firebase store 저장소에 임시글 업데이트하기

const updateDraftToFirebase = async (id: string, obj: any) => {
  try {
    const docRef = doc(firestore, "drafts", `${id}`);
    await updateDoc(docRef, {
      ...obj,
      update_at: serverTimestamp(),
    });
    return true;
  } catch (error) {
    console.log(
      "🚨 " + id + " 임시글 업데이트에 실패하셨습니다. 다시 시도해주세요.",
      error
    );
    return false;
  }
};

// firebase store의 모든 임시글 삭제
export const removeAllDraftsFromFirebase = async () => {
  try {
    const res = await deleteDoc(doc(firestore, "drafts"));
    console.log(res);
    return true;
  } catch (error) {
    console.log("🚨 모든 임시글 삭제에 실패: ", error);
    return false;
  }
};
// firebase store의 특정 임시글 삭제
export const removeDraftByIdFromFirebase = async (id: string) => {
  try {
    await deleteDoc(doc(firestore, "drafts", id));
    return true;
  } catch (error) {
    console.log("🚨 " + id + " 임시글 삭제에 실패: ", error);
    return false;
  }
};

// firebase 함수

// firebase store 에서 모든 게시글 불러오기
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

// Id를 이용해 게시글을 식별하여 가져오기
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

export const removePostByIdFromFirebase = async (id: string) => {
  try {
    await deleteDoc(doc(firestore, "posts", id));
    return true;
  } catch (error) {
    return false;
  }
};
