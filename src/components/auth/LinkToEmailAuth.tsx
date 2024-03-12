import styled from "styled-components";
import { auth } from "../../../firebase";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "@/hook/useAuth";
import { setUserData } from "@/utils/user";
import { IUserInfo } from "@/types/users";

const InputLabel = styled.div`
  /* color: white; */
  /* opacity: 0.7; */
  position: absolute;
  top: 10px;
  left: 20px;
  color: rgba(0, 0, 0, 0.7);
  -webkit-transition: ease 0.2s;
`;
const InputBox = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  input {
    width: 90%;
    height: 30px;
    font-size: 16px;
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
    &:focus + ${InputLabel} {
      top: -8px;
      background-color: #ffffff;
      font-size: 14px;
    }
    &:not(:placeholder-shown) + ${InputLabel} {
      top: -8px;
      background-color: white;
      font-size: 14px;
    }
  }
`;

const actionCodeSettings = {
  url: "http://localhost:3000/login",
  handleCodeInApp: true,
};

interface Props {
  resetLoginBtn: () => void;
}

export default function LinkToEmailAuth({ resetLoginBtn }: Props) {
  const router = useRouter();
  const isLoggedIn = useAuth();

  useEffect(() => {
    resetLoginBtn();
    if (isLoggedIn)
      return () => {
        router.push("/");
      };

    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt(
          "이메일이 맞지 않습니다. 이메일을 다시 입력해주세요."
        );
      }
      signInWithEmailLink(auth, email as string, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
          window.localStorage.setItem(
            "lastLogin",
            JSON.stringify({ linkToEmail: true, gitHub: false })
          );
          window.sessionStorage.setItem(
            "userInfo",
            JSON.stringify({
              id: result.user.uid,
              username: result.user.displayName,
              email: result.user.email,
            })
          );
          console.log(result);
          const userInfo: IUserInfo = {
            email: result.user.email || "",
            displayName:
              (result.user.email && result.user.email.split("@")[0]) || "",
            photoUrl: "",
            uid: result.user.uid,
            bio: "",
          };
          setUserData(userInfo);
          router.push("/");
        })
        .catch((err) => {
          console.log("email로 로그인 error, ", err);
        });
    }
  }, []);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let email = e.currentTarget.email.value;

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((err) => {
        console.log("error msg, ", err);
      });
  };

  return (
    <form onSubmit={handleEmailSubmit}>
      <InputBox>
        <input type="text" name="email" placeholder=" " autoComplete="off" />
        <InputLabel>이메일 링크</InputLabel>
      </InputBox>
      {/* <label>
    이메일 링크로 로그인
    <input type="text" name="email" />
  </label> */}
      <button type="submit">send</button>
    </form>
  );
}
