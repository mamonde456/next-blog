import { onAuthStateChanged } from "firebase/auth";
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
