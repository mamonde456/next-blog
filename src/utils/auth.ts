import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Dispatch, SetStateAction } from "react";

export const checkAuthentication = async (): Promise<boolean> => {
  let isUserAuthenticated = false;
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("sign in");
      isUserAuthenticated = true;
    } else {
      console.log("sign out");
      isUserAuthenticated = false;
    }
  });
  return isUserAuthenticated;
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log("로그아웃");
    })
    .catch((error) => {
      console.log("로그아웃 실패");
      console.log("err msg, ", error);
    });
};
