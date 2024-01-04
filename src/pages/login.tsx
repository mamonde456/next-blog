import {
  createUserWithEmailAndPassword,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithEmailLink,
} from "firebase/auth";
import { useEffect, useRef } from "react";
import { auth } from "../../firebase";
import useLoggedIn from "@/hook/useLoggedIn";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FirebaseError } from "firebase/app";
import LinkToEmailAuth from "@/components/auth/LinkToEmailAuth";

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
  background: red;
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

const actionCodeSettings = {
  url: "http://localhost:3000/login",
  handleCodeInApp: true,
};
export default function Login() {
  const router = useRouter();
  const { isLoggedIn } = useLoggedIn();
  const emailIdRef = useRef<HTMLDivElement>(null);
  const emailLinkRef = useRef<HTMLDivElement>(null);
  const LoginFormRef = useRef<HTMLDivElement>(null);

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
          router.push("/");
        })
        .catch((err) => {
          console.log("email로 로그인 error, ", err);
        });
    }
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    // 이메일 링크 로그인 시도 후, 이메일, 비밀번호 로그인 시도.
    // 이메일, 비밀번호 로그인 시도 실패 시, 계정 생성 시도 > 로그인 시도

    e.preventDefault();
    let count = 0;
    const { email, password } = e.currentTarget;
    const handleWithEmailAndPassword = async (
      email: string,
      password: string
    ) => {
      if (count >= 2) {
        console.log("로그인 시도가 2회를 초과했습니다.");
        return;
      }
      try {
        await signInUser(email, password);
      } catch (err) {
        console.log("tset");
        console.log("로그인 실패, 계정 생성 후 다시 로그인 시도");
        await createUser(email, password);
        console.log(err);
        count = count + 1;
        await handleWithEmailAndPassword(email, password);
      }
    };
    return handleWithEmailAndPassword(email.value, password.value);
  };
  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      window.sessionStorage.setItem("userInfo", JSON.stringify(user));
      alert("계정 생성 완료");
    } catch (err) {
      console.log("계정 생성 err, ", err);
      throw err;
    }
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     window.sessionStorage.setItem("userInfo", JSON.stringify(user));
    //     alert("계정 생성 완료");
    //     // 계정 로그인.
    //     // handleWithEmailAndPassword(email,password, )
    //   })
    //   .catch((err) => {
    //     console.log("계정 생성 err, ", err);
    //   });
  };
  const signInUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      window.sessionStorage.setItem("userInfo", JSON.stringify(user));
      router.push("/");
    } catch (err: any) {
      console.log("email, password login error ", err);
      const errorCode = err.code;
      if (errorCode.includes("invalid-credential")) {
        throw err;
      }
    }
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //     window.sessionStorage.setItem(
    //       "userInfo",
    //       JSON.stringify(userCredential.user)
    //     );
    //   })
    //   .catch((err) => {
    //     console.log("email, password login error ", err);
    //     const errorCode = err.code;
    //     console.log(errorCode);
    //     if (errorCode.includes("invalid-credential")) {
    //       throw err;
    //     }
    //   });
  };

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
          <form onSubmit={handleLogin}>
            <InputBox>
              <input type="text" name="email" placeholder=" " />
              <InputLabel>아이디</InputLabel>
            </InputBox>
            <InputBox>
              <input type="text" name="password" placeholder=" " />
              <InputLabel>비밀번호</InputLabel>
            </InputBox>
            {/* <label>
              이메일
              <input type="text" name="email" />
            </label> */}
            {/* <label>
              비밀번호
              <input type="text" name="password" />
            </label> */}
            <button type="submit">send</button>
          </form>
        </EmailIdBox>
        <EmailLinkBox ref={emailLinkRef}>
          <LinkToEmailAuth />
        </EmailLinkBox>
        <SocialBox>소셜 로그인</SocialBox>
      </LoginFormContainer>
    </Wrapper>
  );
}

export async function getServerSideProps(context: any) {
  // console.log("test");

  return {
    props: {},
  };
}
