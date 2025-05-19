import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithEmailLink,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../../firebase";
import { ACTIONCODESETTINGS, githubProvider } from "./const";

type Props = { email: string; password: string };

export const signIn = async ({ email, password }: Props) => {
  if (!email && !password) {
    return console.log("🚨 signIn: 이메일과 비밀번호가 없습니다.");
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log("🚨 sign In error: ", error);
    return null;
  }
};

export const signUp = async ({ email, password }: Props) => {
  if (!email && !password) {
    return console.log("🚨 signIn: 이메일과 비밀번호가 없습니다.");
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log("🚨 sign up error: ", error);
    return null;
  }
};

export const signInEmailLink = async (email: string) => {
  if (!email) return console.log("🚨 signIn: 이메일 주소를 찾을 수 없습니다.");
  try {
    const userCredential = await signInWithEmailLink(
      auth,
      email,
      window.location.href
    );
    return userCredential;
  } catch (error) {
    console.log("🚨 sign in with email link error: ", error);
    return null;
  }
};

export const sendSignInEmailLink = async (email: string) => {
  try {
    const userCredential = await sendSignInLinkToEmail(
      auth,
      email,
      ACTIONCODESETTINGS
    );
    return userCredential;
  } catch (error) {
    console.log("🚨 sign in with send email link error: ", error);
    return null;
  }
};

export const signOut = async () => {
  try {
    const auth = await signOut();
    console.log("✅ 로그아웃");
    console.log(auth);
    return true;
  } catch (error) {
    console.log("🚨 로그아웃 실패: ", error);
    return null;
  }
};

export const checkAuthentication = async () => {
  let isLoggedIn = false;
  let user = null;
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn = true;
        user = user;
      } else {
        isLoggedIn = false;
        user = null;
      }
    });
  } catch (error) {
    console.log("🚨 로그인 상태 체크 실패: ", error);
    return { isLoggedIn, user };
  }
  return { isLoggedIn, user };
};

export const signInWithGithub = async () => {
  try {
    const userCredential = await signInWithPopup(auth, githubProvider);
    return userCredential;
  } catch (error) {
    console.log("🚨 sign in with github error: ", error);
    return null;
  }
};
