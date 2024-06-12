import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { IUserInfo } from "@/types/users";

export default function useUserInfo() {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const getCurrentUserInfo = () => {
    if (typeof window !== "undefined") {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        const userInfo = window.sessionStorage.getItem("userInfo");
        return userInfo ? JSON.parse(userInfo) : null;
      } else {
        return currentUser || null;
      }
    }
  };

  useEffect(() => {
    const currentUser = getCurrentUserInfo();
    setUserInfo(currentUser);
  }, []);

  return userInfo;
}
