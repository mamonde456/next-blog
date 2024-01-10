import { checkAuthentication } from "@/middleware/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { JsxElement } from "typescript";

export default function RequireAuth({ children }: JsxElement) {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      // checkAuthentication(setIsAuth);
      const isUserAuthenticated = await checkAuthentication();
      setIsAuth(isUserAuthenticated);
      if (!isUserAuthenticated) {
        router.push("/login");
      }
    })();
  }, []);

  return isAuth ? children : null;
}
