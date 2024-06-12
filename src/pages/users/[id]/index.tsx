import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { auth, firestore, storage } from "../../../../firebase";
import { useCallback, useEffect, useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import RequireAuth from "@/components/common/RequireAuth";
import styled from "styled-components";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  type Crop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import MainMenu from "@/components/common/MainMenu";
import EditButton from "@/components/ui/button/EditButton";
import BasicButton from "@/components/ui/button/BasicButton";
import Link from "next/link";
import { useRouter } from "next/router";
import MainPosts from "@/components/blog/MainPosts";
import { collection, where, query, getDocs } from "firebase/firestore";
import { IFirebasePost } from "@/types/blog";
import ItemList from "@/components/ui/ItemList";
import { getUserInfoFromSession } from "@/utils/user";
import { IUserInfo } from "@/types/users";

const Wrapper = styled.div`
  /* display: flex;
  height: 100%;
  justify-content: center;
  align-items: center; */
  width: 100%;
  height: 98%;
  display: flex;
  background: white;
  margin-top: 0.8%;
  border-radius: 10px;
`;
const ContentContainer = styled.div`
  flex: 4;
`;
const ProfileContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ffe395;
  padding: 10px;
  /* padding-top: 100px; */
  /* margin-top: 100px; */
  /* position: relative;
  top: 100px; */
  display: flex;
  gap: 20px;
`;
const ProfileImg = styled.div<{ src: string }>`
  width: 170px;
  height: 170px;
  background-color: white;
  background-image: ${(props) =>
    `url("${props.src ? props.src : "/blank-profile.svg"}")`};
  /* background-image: url("/blank-profile.svg"); */
  background-size: cover;
  background-position: center;
  /* border-radius: 100%; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  /* top: -80px; */
  border: solid 1px black;
`;
const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #3f3f3f;
  :first-child {
    font-size: 32px;
    font-family: Cinzel;
    color: black;
  }
  :nth-child(2) {
    margin-bottom: 20px;
  }
`;

const LinkButton = styled(Link)`
  font-family: monospace;
  background-color: #f3f7fe;
  color: #3b82f6;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  transition: 0.3s;
  text-align: center;
  line-height: 45px;
  position: absolute;
  right: 20px;

  &:hover {
    background-color: #3b82f6;
    box-shadow: 0 0 0 5px #3b83f65f;
    color: #fff;
  }
`;

const Posts = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background: white; */
  padding: 10px;
`;
const Post = styled.li`
  width: 100%;
  /* background: #ececec; */
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* .main_board {
    height: 200px;
  } */
  /* .main_menu {
    height: 100px;
  } */
`;

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const [postList, setPostList] = useState<IFirebasePost[]>([]);
  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    const sessionUserInfo = getUserInfoFromSession();
    setUserInfo(sessionUserInfo);
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  useEffect(() => {
    getProfileImg();
    getQueryPosts();
  }, [id]);

  const getQueryPosts = async () => {
    const postsRef = collection(firestore, "posts");
    const q = query(postsRef, where("userConfig.uid", "==", `${id}`));
    const querySnapshot = await getDocs(q);
    const posts: IFirebasePost[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      posts.push(doc.data() as IFirebasePost);
    });
    setPostList([...posts]);
  };

  const getProfileImg = () => {
    const storage = getStorage();
    const userInfo =
      window.sessionStorage.getItem("userInfo") &&
      JSON.parse(window.sessionStorage.getItem("userInfo") || "");
    console.log(userInfo);
    const imgSrc = `profile-image/${id || userInfo.uid}`;
    console.log(imgSrc);
    getDownloadURL(ref(storage, imgSrc))
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
        console.log(url);
        setUserInfo((prev) => {
          if (!prev) return undefined;
          return {
            ...prev,
            photoUrl: url,
          };
        });
      })
      .catch((error) => {
        console.log("get image error: ", error);
      });
  };

  return (
    <Wrapper>
      <MainMenu />
      <ContentContainer>
        <ProfileContainer>
          <LinkButton href={`${id}/setting-profile`}>정보 수정</LinkButton>
          <ProfileImg src={userInfo?.photoUrl || ""}></ProfileImg>
          <ProfileContent>
            <span>{userInfo?.displayName}</span>
            <span>@{userInfo?.email?.split("@")[0]}</span>
            <span>{userInfo?.bio}</span>
          </ProfileContent>
        </ProfileContainer>
        <ItemList itemList={postList}></ItemList>
      </ContentContainer>
    </Wrapper>
  );
}
