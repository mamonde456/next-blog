import path from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { auth, db, firestore } from "../../../../firebase";
import { set, ref, get, child, getDatabase, remove } from "firebase/database";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useUserInfo from "@/hook/useUserInfo";
import { getCurrentUserFollowing, setCurrentUserFollow } from "@/utils/user";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/router";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { checkAuthentication } from "@/utils/auth";
import DeleteButton from "@/components/ui/button/DeleteButton";
import EditButton from "@/components/ui/button/EditButton";
import BackButton from "@/components/ui/button/BackButton";
import MainMenu from "@/components/common/MainMenu";
import { IUserInfo } from "@/types/users";
import { IFirebasePost, IMeta } from "@/types/blog";
import { formatTimestampToDateStr } from "@/utils/common";

const Wrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* margin-top: 0.8%; */
  background-color: white;
  border-radius: 10px;
`;

const NotebookWrap = styled.div`
  height: 100%;
  min-height: 100vh;
  flex: 4;
  background-color: white;
  border-right: solid 1px rgba(0, 0, 0, 0.2);
`;

const SideMenuList = styled.div`
  flex: 2;
  width: 300px;
  height: 100%;
  /* background: yellow; */
`;

const Title = styled.div`
  padding: 40px;
  font-size: 42px;
  color: black;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  margin-bottom: 40px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 18px;
  }
`;
const PostsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
`;

const getImageUrl = (src: string) => `${src ? src : "/blank-profile.svg"}`;
const UserImg = styled.div<{ src: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  background-image: url(${(props) => getImageUrl(props.src)});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 30px;
  padding-bottom: 200px;
  background-color: white;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: right;
  /* padding: 20px 30px; */
  padding: 10px 0px;
  gap: 10px;
`;

export default function Detail() {
  const [isFollow, setIsFollow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [meta, setMeta] = useState<IMeta>();
  const [posts, setPosts] = useState("");
  const isLoggedIn = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const userInfoRef = useRef<IUserInfo | null>(null);

  useEffect(() => {
    (async () => {
      const metaData = await getPostById();
      checkIfAuthorIsFollowed(metaData);
    })();
  }, []);

  const checkIfAuthorIsFollowed = async (metaData: IMeta | undefined) => {
    const userSessionInfo = window.sessionStorage.getItem("userInfo") || "";
    const userInfo = userSessionInfo && JSON.parse(userSessionInfo);
    const userId = auth.currentUser?.uid || userInfo.uid;
    userInfoRef.current = userInfo;
    if (userInfo && metaData) {
      // 현재 로그인한 유저
      // 현재 방문한 게시글 작성자
      const id = meta?.userConfig.uid;
      const currentFollowUsers = await getCurrentUserFollowing(userId, id);
      const currentFollowUsersKeys = Object.keys(currentFollowUsers);

      if (currentFollowUsersKeys.length > 0) {
        setIsFollow(true);
        setIsLoading(true);
      } else {
        setIsFollow(false);
        setIsLoading(true);
      }
    } else return;
  };

  const getPostById = async () => {
    const docRef = doc(firestore, "posts", `${id}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const firebaseData = docSnap.data();
      const meta: IMeta = {
        id: firebaseData.id,
        title: firebaseData.title,
        description: firebaseData.description,
        created_at: firebaseData.created_at,
        slog: firebaseData.slog,
        userConfig: firebaseData.userConfig,
      };
      const decodedText = decodeURIComponent(firebaseData.content);
      setMeta(meta);
      setPosts(decodedText);
      return meta;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  const handleFollowButtonClick = () => {
    // 현재 로그인한 유저
    const user = auth.currentUser;
    const userInfo =
      window.sessionStorage.getItem("userInfo") &&
      JSON.parse(window.sessionStorage.getItem("userInfo") || "");
    const currentUid = user?.uid || userInfo.uid;
    const uid = meta?.userConfig.uid || "";
    const metaObj = {
      displayName:
        meta?.userConfig.displayName ||
        meta?.userConfig.email.split("@")[0] ||
        "",
      uid,
      email: meta?.userConfig.email || "",
      photoUrl: meta?.userConfig.photoUrl || "",
    };

    // 팔로우 컬렉션에 추가
    if (isFollow) {
      const removeRef = ref(db, `followUsers/${currentUid}/${uid}`);
      remove(removeRef)
        .then(() => {
          console.log("데이터 삭제 완료");
        })
        .catch((error) => {
          console.log("데이터 삭제 오류, ", error);
        });
      setIsFollow(false);
    } else {
      setIsFollow(true);
      setCurrentUserFollow(currentUid, metaObj);
    }
  };

  const onRemovePost = async () => {
    // firebase 문서 삭제
    // const id = data.id;
    // await deleteDoc(doc(firestore, "posts", id));

    // 로컬 문서 삭제
    const response = await fetch(`/api/posts?id=${meta?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      router.push("/");
    }
    alert("문서가 삭제되었습니다.");
  };
  return (
    <Wrapper>
      <MainMenu />
      <NotebookWrap>
        <Title>{meta?.title || ""}</Title>

        <MetaData>
          <UserInfo>
            <UserImg src={meta?.userConfig.photoUrl || ""}></UserImg>
            <span>
              {meta?.userConfig?.displayName ||
                meta?.userConfig?.email.split("@")[0]}
            </span>
            {meta?.userConfig.email !== userInfoRef.current?.email && (
              <>
                {isLoggedIn && (
                  <button onClick={handleFollowButtonClick}>
                    {isFollow ? "following" : "follow"}
                  </button>
                )}
              </>
            )}
          </UserInfo>
          <PostsInfo>
            {meta?.userConfig?.uid === userInfoRef.current?.uid && (
              <BtnContainer>
                {isLoggedIn && (
                  <>
                    <EditButton
                      onClick={() =>
                        router.push({
                          pathname: `/write/${meta?.id}`,
                          query: { action: "edit" },
                        })
                      }
                    />
                    <DeleteButton onClick={onRemovePost} />
                  </>
                )}
              </BtnContainer>
            )}
            <div>{formatTimestampToDateStr(meta?.created_at || null)}</div>
          </PostsInfo>
        </MetaData>
        <Content style={{ whiteSpace: "pre-line" }}>
          <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {posts}
          </Markdown>
        </Content>
      </NotebookWrap>
      <SideMenuList />
    </Wrapper>
  );
}

export const getStaticPaths = async () => {
  const file = await fs.readdir(path.join("__post"));
  const paths = file.map((el) => ({
    params: { id: el.replace(/\.md$/, "") },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }: any) => {
  // const markdownWithMetadata = await fs.readFile(
  //   path.join(`__post/${params.id}.md`),
  //   "utf-8"
  // );
  // if (markdownWithMetadata) {
  // const { data, content } = await matter(markdownWithMetadata);
  // return {
  //   props: {
  //     data,
  //     content,
  //   },
  // };
  // }
  return { props: {} };
};
