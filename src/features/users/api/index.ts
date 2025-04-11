import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../../../firebase";
import { IUserInfo } from "@/types/users";

export const getUserFromFirebaseById = async (uid: string) => {
  if (!uid)
    return console.log(
      "🚨 getUserFromFirebaseById: user id를 찾을 수 없습니다.",
      uid
    );
  try {
    const docRef = doc(firestore, `users/${uid}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("✅ 사용자의 데이터가 존재하지 않습니다.");
      return null;
    }
  } catch (error) {
    console.log("🚨 getUserFromFirebaseById error: ", error);
    return null;
  }
};

export const getCurrentUser = async () => {
  const user = auth.currentUser;
  if (user) {
    return user;
  } else {
    console.log("✅ 로그인한 유저를 찾을 수 없습니다.");
    return null;
  }
};

export const setUserFromFirebaseById = async (userInfo: IUserInfo) => {
  const id = userInfo.uid;
  await setDoc(doc(firestore, "users", id), {
    ...userInfo,
  });
};

// export const getAllUserData = async () => {
//     try {
//       const userRef = collection(firestore, "users");
//       const q = query(userRef, orderBy("uid"), limit(10));
//       const querySnapshot = await getDocs(q);
//       const users: IUserInfo[] = [];
//       querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//         const user = doc.data() as IUserInfo;
//         users.push(user);
//       });
//       return users;
//     } catch (error) {
//       console.log("get All User Data Error , ", error);
//     }
//   };
