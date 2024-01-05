import {
  createUserWithEmailAndPassword,
  isSignInWithEmailLink,
  signInWithEmailAndPassword,
  signInWithEmailLink,
} from "firebase/auth";
import { useEffect, useRef } from "react";
import { auth } from "../../firebase";
import useLoggedIn from "@/hook/useLoggedIn";
import { useRouter } from "next/router";
import styled from "styled-components";
import LinkToEmailAuth from "@/components/auth/LinkToEmailAuth";
import IdAndPasswordAuth from "@/components/auth/IdAndPasswordAuth";

const Wrapper = styled.div`
  /* height: 100%; */
  padding-top: 150px;
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: center; */
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LoginBox = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px black;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  background-color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
`;

const LoginFormContainer = styled.div`
  width: 300px;
  height: 170px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
  position: relative;
  -webkit-transition: ease 0.2s;
  &.hidden {
    display: none;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    border: solid 1px black;
    background-color: #f2df71;
    position: absolute;
    right: 10px;
  }
`;
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
const EmailIdBox = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;
const EmailLinkBox = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;
const SocialBox = styled.div`
  display: none;
  &.active {
    display: block;
  }
`;

export default function Login() {
  const emailIdRef = useRef<HTMLDivElement>(null);
  const emailLinkRef = useRef<HTMLDivElement>(null);
  const LoginFormRef = useRef<HTMLDivElement>(null);

  const clickLoginBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    const loginType = e.currentTarget.dataset.loginType;
    resetLoginBtn();
    if (loginType === "emailId") {
      if (emailIdRef && emailIdRef.current && LoginFormRef.current) {
        LoginFormRef.current.classList.remove("hidden");
        emailIdRef.current.classList.add("active");
      }
    } else if (loginType === "emailLink") {
      if (emailLinkRef && emailLinkRef.current && LoginFormRef.current) {
        LoginFormRef.current.classList.remove("hidden");
        emailLinkRef.current.classList.add("active");
      }
    }
  };

  const resetLoginBtn = () => {
    if (emailIdRef.current && emailLinkRef.current && LoginFormRef.current) {
      emailIdRef.current.classList.remove("active");
      emailLinkRef.current.classList.remove("active");
      LoginFormRef.current.classList.add("hidden");
    }
  };

  return (
    <Wrapper>
      <LoginContainer>
        <LoginBox data-login-type="emailId" onClick={clickLoginBtn}>
          아이디/비밀번호
        </LoginBox>
        <LoginBox data-login-type="emailLink" onClick={clickLoginBtn}>
          이메일 링크
        </LoginBox>
        <LoginBox data-login-type="github" onClick={clickLoginBtn}>
          깃헙
        </LoginBox>
      </LoginContainer>
      <LoginFormContainer ref={LoginFormRef}>
        <EmailIdBox ref={emailIdRef}>
          <IdAndPasswordAuth />
        </EmailIdBox>
        <EmailLinkBox ref={emailLinkRef}>
          <LinkToEmailAuth resetLoginBtn={resetLoginBtn} />
        </EmailLinkBox>
        <SocialBox>소셜 로그인</SocialBox>
      </LoginFormContainer>
    </Wrapper>
  );
}
