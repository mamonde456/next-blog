import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState();
  const getCurrentUserInfo = () => {
    if (typeof window !== "undefined") {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        const userInfo = window.sessionStorage.getItem("userInfo");
        return userInfo ? JSON.parse(userInfo) : null;
      } else {
        return currentUser;
      }
    }
  };

  useEffect(() => {
    const currentUser = getCurrentUserInfo();
    setUserInfo(currentUser);
  }, []);

  return userInfo;
}
