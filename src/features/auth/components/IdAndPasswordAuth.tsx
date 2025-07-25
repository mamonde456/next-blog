import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styled from "styled-components";
import { auth, firestore } from "../../../../firebase";
import { useRouter } from "next/router";
import { getCurrentUserData } from "../../../utils/user";
import { IUserInfo } from "../../../types/users";
import { useRef } from "react";
import { doc, setDoc } from "firebase/firestore";
import PasswordIcon from "./PasswordIcon";

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

export default function IdAndPasswordAuth() {
  const router = useRouter();
  const passwordRef = useRef<HTMLInputElement>(null);

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
        alert("로그인 시도가 2회를 초과했습니다.");
        return;
      }
      try {
        await signInUser(email, password);
      } catch (err) {
        console.log("로그인 실패, 계정 생성 후 다시 로그인 시도");
        console.log(err);
        const isCreateAccount = confirm("계정을 생성하시겠습니까?");
        if (isCreateAccount) {
          await createUser(email, password);
          count = count + 1;
          await handleWithEmailAndPassword(email, password);
        } else {
          return alert("로그인에 실패하셨습니다. 다시 시도해주세요.");
        }
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
      const userInfo: IUserInfo = {
        email: user.email || "",
        displayName: (user.email && user.email.split("@")[0]) || "",
        photoUrl: "",
        uid: user.uid,
        bio: "",
        chatRooms: [],
        guestbooks: [],
      };
      window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      await setDoc(doc(firestore, "users", user.uid), userInfo);
      alert("계정 생성 완료");
    } catch (err) {
      console.log("계정 생성 err, ", err);
      throw err;
    }
  };
  const signInUser = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userInfo = await getCurrentUserData(user.uid);
      window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

      router.push("/");
    } catch (err: any) {
      const errorCode = err.code;
      if (errorCode.includes("invalid-credential")) {
        throw err;
      }
    }
  };

  const handlePasswordVisibilityChange = (isVisible: boolean) => {
    if (passwordRef && passwordRef.current) {
      if (isVisible) {
        passwordRef.current.type = "password";
      } else {
        passwordRef.current.type = "text";
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputBox>
        <input type="text" name="email" autoComplete="off" placeholder=" " />
        <InputLabel>아이디</InputLabel>
      </InputBox>
      <InputBox>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder=" "
        />
        <InputLabel>비밀번호</InputLabel>
        <PasswordIcon
          handlePasswordVisibilityChange={handlePasswordVisibilityChange}
        />
      </InputBox>
      <button type="submit">send</button>
    </form>
  );
}
