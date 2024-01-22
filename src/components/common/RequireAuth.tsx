import useAuth from "@/hook/useAuth";
import { checkAuthentication } from "@/middleware/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { JsxElement } from "typescript";

export default function RequireAuth({ children }: JsxElement) {
  const isUserAuthenticated = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (!isUserAuthenticated) {
        router.push("/login");
      }
    })();
  }, []);

  return isUserAuthenticated ? children : null;
}
