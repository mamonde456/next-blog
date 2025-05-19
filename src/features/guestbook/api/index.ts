import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../../../../firebase";
import { IGuestbook } from "@/types/users";

export const sendGuestbook = async (userInfo: any) => {
  try {
    const id = userInfo.id;
    const guestbooksRef = doc(firestore, `guestbook`, id);
    await setDoc(guestbooksRef, userInfo);
    return true;
  } catch (error) {
    console.log("🚨 guestbook error: ", error);
    return null;
  }
};

export const listenGuestbook = () => {
  try {
    const guestbook: IGuestbook[] = [];
    const q = query(collection(firestore, "guestbook"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        guestbook.push(doc.data() as IGuestbook);
      });
    });

    return { guestbook, unsub };
  } catch (error) {
    console.log("🚨 listenGuestbook error: ", error);
    return null;
  }
};

export const getAllGuestBook = async () => {
  try {
    const guestBookRef = collection(firestore, "guestbook");
    const q = query(guestBookRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot) {
      return querySnapshot;
    } else {
      console.log("✅ 방명록을 찾을 수 없습니다.");
      return null;
    }
  } catch (error) {
    console.log("🚨 getAllGuestBook error: ", error);
    return null;
  }
};
