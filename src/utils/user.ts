import { IUserInfo } from "@/types/users";
import { db, firestore } from "../../firebase";
import { set, ref, get, child, getDatabase } from "firebase/database";
import {
  doc,
  getDoc,
  limit,
  orderBy,
  setDoc,
  query,
  collection,
  getDocs,
} from "firebase/firestore";

interface followDataType {
  name: string;
  email: string;
  imageUrl: string;
  id: string;
}
export const setCurrentUserFollow = (
  uid: string,
  { name, email, imageUrl, id }: followDataType
) => {
  set(ref(db, `followUsers/${uid}/${id}`), {
    username: name,
    email: email,
    profile_img: imageUrl,
    id: id,
  });
};

export const getCurrentUserFollowing = async (userId: string, id?: string) => {
  const dbRef = ref(getDatabase());
  console.log(userId, id);
  const BASE_URL = `followUsers/`;
  const USER_ID = `${BASE_URL}${userId}`;
  const ID = `${BASE_URL}${userId}/${id}`;

  const snapshot = await get(child(dbRef, id ? ID : USER_ID));
  console.log(snapshot.exists());
  if (snapshot.exists()) {
    console.log(snapshot.val());
    return snapshot.val();
  } else {
    console.log("No data available");
    return [];
  }
};

export const setUserData = async (userInfo: IUserInfo) => {
  const id = userInfo.uid;
  await setDoc(doc(firestore, "users", id), {
    ...userInfo,
  });
};

export const getUserInfoFromSession = () => {
  const userInfoString = window.sessionStorage.getItem("userInfo");
  return userInfoString ? JSON.parse(userInfoString) : null;
};

export const getCurrentUserData = async (currentUserId?: string) => {
  const docRef = doc(firestore, `users/${currentUserId}`);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("사용자 데이터가 존재합니다.");
    return docSnap.data();
  } else {
    console.log("사용자 데이터가 존재하지 않습니다.");
    return;
  }
};

export const getAllUserData = async () => {
  try {
    const userRef = collection(firestore, "users");
    const q = query(userRef, orderBy("uid"), limit(10));
    const querySnapshot = await getDocs(q);
    const users: IUserInfo[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const user = doc.data() as IUserInfo;
      users.push(user);
    });
    return users;
  } catch (error) {
    console.log("get All User Data Error , ", error);
  }
};
