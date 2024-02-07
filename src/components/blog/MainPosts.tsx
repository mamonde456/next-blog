import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import styled from "styled-components";
import { firestore } from "../../../firebase";
import { useEffect, useState } from "react";
import { getAllPostsFromFirebase } from "@/utils/\bblog";
import { IFirebasePost } from "@/types/blog";
import Link from "next/link";
import {
  decrementLikeCount,
  incrementLikeCount,
  listenToLikeCountChanges,
  testt,
} from "@/features/like";
import LikeIcon from "../ui/LikeIcon";
import BookmarkIcon from "../ui/BookmarkIcon";
import { addPostToBookmark, removePostFromBookmark } from "@/features/bookmark";

const MainBoard = styled.div`
  flex: 4;
  height: 100%;
  border-right: solid 1px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
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

const Title = styled.div`
  height: 60px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
`;
const Content = styled.div`
  height: 100px;
  padding: 10px;
`;

const MetaContainer = styled.div`
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const MetaContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  /* background: red; */
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const Tab = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  text-align: center;
  &:hover {
    background-color: #eeeeee;
  }
`;

export default function MainPosts() {
  const [postList, setPostList] = useState<IFirebasePost[]>([]);
  const [like, setLike] = useState(0);
  useEffect(() => {
    (async () => {
      const posts = await getAllPostsFromFirebase();
      if (posts !== null) {
        setPostList([...posts]);
      } else {
        console.log("데이터가 없습니다.");
      }
    })();
  }, []);

  return (
    <MainBoard>
      <TabContainer>
        <Tab>최신탭</Tab>
        <Tab>팔로우탭</Tab>
      </TabContainer>
      <Posts>
        {postList.map((post: IFirebasePost) => (
          <>
            <Post>
              <Link href={"posts/" + post?.id}>
                <Title>{post?.title}</Title>
                <Content>{post?.description}</Content>
              </Link>
              <MetaItem post={post} />
            </Post>
          </>
        ))}
      </Posts>
    </MainBoard>
  );
}

interface IMeta {
  post: IFirebasePost;
}
function MetaItem({ post }: IMeta) {
  const [likeCount, setLikeCount] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(firestore, "blog", post.id),
      { includeMetadataChanges: true },
      (doc) => {
        const likeCount = doc.data()?.meta?.like || 0;
        console.log(likeCount);
        setLikeCount(likeCount);
      }
    );

    return () => unsub();
  }, [post.id]);

  useEffect(() => {
    const userInfo =
      window.sessionStorage.getItem("userInfo") &&
      JSON.parse(window.sessionStorage.getItem("userInfo") || "");
    if (isBookmark) {
      setBookmark(userInfo.uid);
    } else {
      removePostFromBookmark(userInfo.uid, post.id);
    }
  }, [isBookmark]);

  const getLikeState = (state: boolean) => {
    if (state) {
      incrementLikeCount(post.id);
    } else {
      decrementLikeCount(post.id);
    }
  };

  const setBookmark = (userId: string) => {
    const config = {
      id: post.id,
      title: post.title,
      description: post.description,
      created_at: post.created_at,
      userConfig: {
        displayName: post.userConfig.displayName,
        email: post.userConfig.email,
        photoUrl: post.userConfig.photoUrl,
        uid: post.userConfig.uid,
      },
      meta: {
        like: post.meta.like,
      },
    };

    addPostToBookmark(userId, config);
  };

  return (
    <MetaContainer>
      <MetaContent>
        <LikeIcon getLikeState={getLikeState} />
        {/* <svg
         
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
        </svg> */}
        <span>{likeCount}</span>
      </MetaContent>
      <MetaContent onClick={() => setIsBookmark((prev) => !prev)}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
        </svg> */}
        <BookmarkIcon />
        <span>북마크</span>
      </MetaContent>
    </MetaContainer>
  );
}
