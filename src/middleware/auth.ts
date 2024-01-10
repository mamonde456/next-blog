import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Dispatch, SetStateAction } from "react";

export const checkAuthentication = async (): Promise<boolean> => {
  //   const sessionUserInfo = window.sessionStorage.getItem("userInfo");
  //   const userInfo = sessionUserInfo && JSON.parse(sessionUserInfo);
  let result = false;
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("sign in");
      // func(true);
      result = true;
    } else {
      console.log("sign out");
      // func(false);
      result = false;
    }
  });
  return result;
};
