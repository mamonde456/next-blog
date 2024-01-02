import {
  createUserWithEmailAndPassword,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  signInWithEmailLink,
} from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../firebase";
import useLoggedIn from "@/hook/useLoggedIn";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FirebaseError } from "firebase/app";

const Wrapper = styled.div`
  height: 100%;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const actionCodeSettings = {
  url: "http://localhost:3000/login",
  handleCodeInApp: true,
};
export default function Login() {
  const router = useRouter();
  const { isLoggedIn } = useLoggedIn();
  useEffect(() => {
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
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <Wrapper>
      <form onSubmit={handleLogin}>
        <label>
          이메일
          <input type="text" name="email" />
        </label>
        <label>
          비밀번호
          <input type="text" name="password" />
        </label>
        <button type="submit">send</button>
      </form>
      {/* <form onSubmit={handleEmailSubmit}>
        <label>
          이메일 링크로 로그인
          <input type="text" name="email" />
        </label>
        <button type="submit">send</button>
      </form> */}
      {/* <input type="text" /> */}
    </Wrapper>
  );
}

export async function getServerSideProps(context: any) {
  // console.log("test");

  return {
    props: {},
  };
}
