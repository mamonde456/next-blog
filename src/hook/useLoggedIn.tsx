import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export default function useLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(window);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setIsLoggedIn(true);

        console.log("sign in");
      } else {
        setIsLoggedIn(false);
        console.log("sign out");
      }
    });
  }, []);
  return { isLoggedIn };
}
