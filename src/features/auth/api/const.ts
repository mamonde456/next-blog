import { GithubAuthProvider } from "firebase/auth";

export const ACTIONCODESETTINGS = {
  url: process.env.NEXT_PUBLIC_ACTION_CODE_SETTINGS || "",
  handleCodeInApp: true,
};

export const githubProvider = new GithubAuthProvider();
