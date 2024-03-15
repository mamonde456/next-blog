import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../../firebase";
import { useRouter } from "next/router";
import { getCurrentUserData, setUserData } from "@/utils/user";
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

export default function IdAndPasswordAuth() {
  const router = useRouter();

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
        console.log("로그인 실패, 계정 생성 후 다시 로그인 시도");
        const isCreateAccount = confirm("계정을 생성하시겠습니까?");
        if (isCreateAccount) {
          await createUser(email, password);
          console.log(err);
          count = count + 1;
          await handleWithEmailAndPassword(email, password);
        } else {
          return console.log("로그인 실패");
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
      };
      window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
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
      const userInfo = await getCurrentUserData(user.uid);
      console.log("userInfouserInfouserInfo, ", userInfo);
      window.sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

      router.push("/");
    } catch (err: any) {
      console.log("email, password login error ", err);
      const errorCode = err.code;
      if (errorCode.includes("invalid-credential")) {
        throw err;
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
        <input type="text" name="password" placeholder=" " />
        <InputLabel>비밀번호</InputLabel>
      </InputBox>
      <button type="submit">send</button>
    </form>
  );
}
