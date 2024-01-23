import path from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { auth, db, firestore } from "../../../../firebase";
import { set, ref, get, child, getDatabase, remove } from "firebase/database";
import { useEffect, useLayoutEffect, useState } from "react";
import useUserInfo from "@/hook/useUserInfo";
import { getCurrentUserFollowing, setCurrentUserFollow } from "@/utils/user";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/router";
import { deleteDoc, doc } from "firebase/firestore";

const Wrapper = styled.div`
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  padding: 10px;
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
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  span {
    font-size: 18px;
  }
`;
const Content = styled.div`
  width: 100%;
  height: 500px;
  padding: 30px;
`;

const NotebookWrap = styled.div`
  width: 700px;
  height: 800px;
  background-color: white;
  background-image: url("/notebook.jpg");
  background-size: cover;
  /* border: solid 1px black; */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

interface IDetailProps {
  data: {
    id: string;
    title: string;
    created_at: string;
    slog: string;
    owner: Owner;
  };
  content: string;
}
interface Owner {
  displayName: string;
  email: string;
  photoUrl: string;
  id: string;
}
export default function detail({ data, content }: IDetailProps) {
  const [isFollow, setIsFollow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useAuth();
  const router = useRouter();

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;
  const userInfod = useUserInfo();
  useIsomorphicLayoutEffect(() => {
    (async () => {
      if (isLoggedIn) {
        // 현재 로그인한 유저
        const userSessionInfo = window.sessionStorage.getItem("userInfo") || "";
        const userInfo = userSessionInfo && JSON.parse(userSessionInfo);
        console.log(userInfo);
        const userId = auth.currentUser?.uid || userInfo.uid;
        // 현재 방문한 게시글 작성자
        const id = data.owner.id;
        console.log(userId, id);
        const currentFollowUsers = await getCurrentUserFollowing(userId, id);
        console.log(currentFollowUsers);
        const currentFollowUsersKeys = Object.keys(currentFollowUsers);

        if (currentFollowUsersKeys.length > 0) {
          setIsFollow(true);
          setIsLoading(true);
        } else {
          setIsFollow(false);
          setIsLoading(true);
        }
      }
    })();
  }, []);

  const handleFollowButtonClick = () => {
    // 현재 로그인한 유저
    const user = auth.currentUser;
    const userInfo =
      window.sessionStorage.getItem("userInfo") &&
      JSON.parse(window.sessionStorage.getItem("userInfo") || "");
    const uid = user?.uid || userInfo.uid;
    console.log(data);
    const id = data.owner.id;
    const name = data.owner.displayName;
    const email = data.owner.email;
    const imageUrl = data.owner.photoUrl;

    // 팔로우 컬렉션에 추가
    if (isFollow) {
      remove(ref(db, `followUsers/${uid}/${id}`));
      setIsFollow(false);
    } else {
      setIsFollow(true);
      setCurrentUserFollow(uid, { name, id, email, imageUrl });
    }
  };

  const onRemovePost = async () => {
    // firebase 문서 삭제
    // const id = data.id;
    // await deleteDoc(doc(firestore, "blog", id));

    // 로컬 문서 삭제
    const response = await fetch(`/api/blog?${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("문서가 삭제되었습니다.");
  };
  return (
    <Wrapper>
      <NotebookWrap>
        <Title>{data?.title}</Title>
        <MetaData>
          <UserInfo>
            <span>
              {data?.owner?.displayName || data?.owner?.email.split("@")[0]}
            </span>
            {data?.owner.email === userInfod?.email ? null : (
              <>
                {isLoggedIn && isLoading && (
                  <button onClick={handleFollowButtonClick}>
                    {isFollow ? "following" : "follow"}
                  </button>
                )}
              </>
            )}
          </UserInfo>
          <div>{data?.created_at.slice(0, 10)}</div>
        </MetaData>
        <div>
          <button
            onClick={() =>
              router.push({
                pathname: `/write/${data.slog}`,
                query: { action: "edit" },
              })
            }
          >
            수정
          </button>
          <button onClick={onRemovePost}>삭제</button>
        </div>
        <Content style={{ whiteSpace: "pre-line" }}>
          <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {content}
          </Markdown>
        </Content>
      </NotebookWrap>
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
  const markdownWithMetadata = await fs.readFile(
    path.join(`__post/${params.id}.md`),
    "utf-8"
  );
  const { data, content } = await matter(markdownWithMetadata);
  return {
    props: {
      data,
      content,
    },
  };
};
