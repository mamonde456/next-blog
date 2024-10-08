import { useEffect, useRef } from "react";
import styled from "styled-components";
import LinkToEmailAuth from "@/components/auth/LinkToEmailAuth";
import IdAndPasswordAuth from "@/components/auth/IdAndPasswordAuth";
import { useRouter } from "next/router";
import GitHubButton from "@/components/ui/button/social/GitHubButton";
import GitHubAuth from "@/components/auth/GitHubAuth";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

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
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);

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
  display: flex;
  gap: 20px;
  justify-content: space-around;
  /* display: none; */
  /* &.active {
    display: block;
  } */
`;
const provider = new GithubAuthProvider();

export default function Login() {
  const emailIdRef = useRef<HTMLDivElement>(null);
  const emailLinkRef = useRef<HTMLDivElement>(null);
  const LoginFormRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
  const handleGitHubLogin = async () => {
    try {
      const userCred = await signInWithPopup(auth, provider);
      const user = userCred.user;
      console.log("GitHub Login: ", user);
      router.push("/");
    } catch (error) {
      console.log("🚨 GitHub Login Error: ", error);
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
        <LoginBox>
          <SocialBox onClick={handleGitHubLogin}>
            <GitHubButton />
          </SocialBox>
        </LoginBox>
      </LoginContainer>
      <LoginFormContainer ref={LoginFormRef}>
        <EmailIdBox ref={emailIdRef}>
          <IdAndPasswordAuth />
        </EmailIdBox>
        <EmailLinkBox ref={emailLinkRef}>
          <LinkToEmailAuth resetLoginBtn={resetLoginBtn} />
        </EmailLinkBox>
      </LoginFormContainer>
    </Wrapper>
  );
}
