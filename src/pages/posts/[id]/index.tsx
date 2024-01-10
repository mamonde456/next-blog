import path from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import { auth, db } from "../../../../firebase";
import { set, ref, get, child, getDatabase, remove } from "firebase/database";
import { useEffect, useLayoutEffect, useState } from "react";
import useUserInfo from "@/hook/useUserInfo";
import { getCurrentUserFollowing, setCurrentUserFollow } from "@/utils/user";
import img from "../../../../public/notebook.jpg";
import useLoggedIn from "@/hook/useLoggedIn";

const Wrapper = styled.div`
  height: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .postItCont {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 60px;
    -webkit-transform: rotate(10deg);
    .postIt {
      margin: 20px;
      background-color: #ffffa5;
      width: 220px;
      height: 200px;
      padding: 10px;
      padding-top: 25px;
      box-sizing: border-box;
      position: relative;
      top: 300px;
      z-index: 2;
      &:hover {
        transform: rotate(5deg);
        -webkit-transition: ease 0.5s;
      }
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 90px;
        height: 20px;
        background-color: rgba(255, 232, 0, 0.2);
        border: solid 1px rgba(255, 232, 0, 0.8);
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(even) {
        border-bottom-right-radius: 60px 10px;
        -webkit-filter: drop-shadow(
          0px 0px 3px rgba(0, 0, 0, 0.2)
        ); /* Safari */
        filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
      }
      &:nth-child(odd) {
        border-bottom-left-radius: 10px 10px;
        -webkit-filter: drop-shadow(
          0px 0px 3px rgba(0, 0, 0, 0.2)
        ); /* Safari */
        filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffa5+0,ffffa5+100&0+8,0+8,1+9,1+9,1+92 */
        background: -moz-linear-gradient(
          45deg,
          rgba(255, 255, 165, 0) 0%,
          rgba(255, 255, 165, 0) 5%,
          rgba(255, 255, 165, 1) 9%,
          rgba(255, 255, 165, 1) 92%,
          rgba(255, 255, 165, 1) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          45deg,
          rgba(255, 255, 165, 0) 0%,
          rgba(255, 255, 165, 0) 5%,
          rgba(255, 255, 165, 1) 9%,
          rgba(255, 255, 165, 1) 92%,
          rgba(255, 255, 165, 1) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          45deg,
          rgba(255, 255, 165, 0) 0%,
          rgba(255, 255, 165, 0) 5%,
          rgba(255, 255, 165, 1) 9%,
          rgba(255, 255, 165, 1) 92%,
          rgba(255, 255, 165, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffa5', endColorstr='#ffffa5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-top: 30px solid #ffffa5;
          border-left: 30px solid transparent;
          -webkit-filter: drop-shadow(
            0px 0px 3px rgba(0, 0, 0, 0.2)
          ); /* Safari */
          filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
        }
      }

      .titulo {
        width: 100%;
        border-bottom: solid 1px;
        padding-bottom: 4px;
        margin-bottom: 8px;
        font-size: 18px;
      }
      .nota {
        max-height: 125px;
        height: 100%;
        font-size: 13px;
        text-align: justify;
        padding: 0 21px;
        display: flex;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;

        li {
          margin: 5px 0;
        }
      }
    }
  }
`;
const Title = styled.div`
  font-size: 42px;
  color: black;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  margin-bottom: 25px;
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
  /* background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url("../../../../public/notebook.jpg"); */
  background-image: url("/notebook.jpg");
  background-size: cover;
  /* border: solid 1px black; */
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

interface IDetailProps {
  data: {
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
  const { isLoggedIn } = useLoggedIn();

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;
  const userInfod = useUserInfo();
  useIsomorphicLayoutEffect(() => {
    console.log("dd , ", userInfod);
    // 현재 로그인한 유저
    const userSessionInfo = window.sessionStorage.getItem("userInfo") || "";
    const userInfo = userSessionInfo && JSON.parse(userSessionInfo);
    console.log(userInfo);
    const userId = auth.currentUser?.uid || userInfo.uid;
    // 현재 방문한 게시글 작성자
    const id = data.owner.id;
    const username = data.owner.displayName;
    const profileImg = data.owner.photoUrl;
    console.log(userId, id);
    const currentFollowUsers = getCurrentUserFollowing(userId, id);
    if (currentFollowUsers.length > 0) {
      setIsFollow(true);
    } else {
      setIsFollow(false);
    }
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `followUsers/${userId}/${id}`)).then((snapshot) => {
    //   console.log(snapshot.exists());
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //     setIsFollow(true);
    //   } else {
    //     setIsFollow(false);
    //     console.log("No data available");
    //   }
    // });
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
      setCurrentUserFollow(uid, { name, id, email, imageUrl });
    }
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
                {isLoggedIn && (
                  <button onClick={handleFollowButtonClick}>
                    {isFollow ? "following" : "follow"}
                  </button>
                )}
              </>
            )}
          </UserInfo>
          <div>{data?.created_at.slice(0, 10)}</div>
        </MetaData>
        {/* <div className="postItCont">
          <div className="postIt">
            <div className="titulo">목차</div>
            <div className="nota">
              Lorem ipsum dolor venenatis velit nunc, porta pharetra ligula
              interdum mollis.
            </div>
          </div>
        </div> */}
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
