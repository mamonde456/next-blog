import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { firestore } from "../../../../firebase";
import { decodeFirestorePost, decodeFirestorePosts } from "../services";

// firebase store 에서 모든 게시글 불러오기
export const getAllPostsFromFirebase = async () => {
  try {
    const postsRef = collection(firestore, "posts");
    const q = query(postsRef, orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot) {
      return decodeFirestorePosts(querySnapshot);
    } else {
      console.log("✅ 게시글을 찾을 수 없습니다.");
      return null;
    }
  } catch (error) {
    console.log("🚨 getAllPostsFromFirebase error: ", error);
    return null;
  }
};

// Id를 이용해 게시글을 식별하여 가져오기
export const getPostById = async (id: string) => {
  try {
    const docRef = doc(firestore, "posts", `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const firebaseData = docSnap.data();
      return decodeFirestorePost(firebaseData);
    } else {
      console.log("✅ 게시글을 찾을 수 없습니다.");
    }
  } catch (error) {
    console.log("🚨 getPostById error: ", error);
    return null;
  }
};

export const removePostByIdFromFirebase = async (id: string) => {
  try {
    await deleteDoc(doc(firestore, "posts", id));
    return true;
  } catch (error) {
    return null;
  }
};
