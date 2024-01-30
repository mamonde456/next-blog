import useAuth from "@/hook/useAuth";
import { checkAuthentication } from "@/utils/auth";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { JsxElement } from "typescript";

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const isUserAuthenticated = await checkAuthentication();
      setIsAuth(isUserAuthenticated);
      if (!isUserAuthenticated) {
        router.push("/login");
      }
    })();
  }, [isAuth]);

  return isAuth ? <>{children}</> : null;
}
