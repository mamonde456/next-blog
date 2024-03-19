import styled from "styled-components";
import { useEffect, useState } from "react";
import { getAllPostsFromFirebase } from "@/utils/\bblog";
import { IFirebasePost } from "@/types/blog";
import Link from "next/link";
import { getCurrentUserFollowing } from "@/utils/user";
import useAuth from "@/hook/useAuth";
import MetaItem from "../ui/meta/MetaItem";
import ItemList from "../ui/ItemList";

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

const Tab = styled.div<{ $isLoggedIn: Boolean }>`
  &:hover {
    background-color: #eeeeee;
  }
  &:not(.selected) {
    width: ${(props) => props.$isLoggedIn && "50%"};
    height: 100%;
    padding: 10px;
    text-align: center;
    cursor: pointer;
  }

  width: 100%;
  cursor: pointer;
`;

type PostListType = {
  getPostList: (posts: IFirebasePost[]) => void;
};

export default function MainPosts({ getPostList }: PostListType) {
  const [category, setCategory] = useState(false);
  const [postList, setPostList] = useState<IFirebasePost[]>([]);
  const isLoggedIn = useAuth();

  useEffect(() => {
    (async () => {
      const posts = await getAllPostsFromFirebase();
      if (posts !== null) {
        posts.reverse();
        setPostList([...posts]);
        getPostList([...posts]);
      } else {
        console.log("데이터가 없습니다.");
      }
    })();
  }, []);

  useEffect(() => {
    const userInfo = window.sessionStorage.getItem("userInfo");
    if (userInfo != null) {
      // 로그인
      if (category) {
        // 팔로우탭
        setCategory(true);
        setFollowingPosts(postList);
      } else {
        // 최신탭
        setCategory(false);
      }
    } else {
      // 최신탭
      setCategory(false);
    }
  }, [category]);

  const setFollowingPosts = async (postList: IFirebasePost[]) => {
    const userInfo = window.sessionStorage.getItem("userInfo");
    const userId = userInfo && JSON.parse(userInfo).uid;
    if (userInfo != null) {
      const followingUser = await getCurrentUserFollowing(userId);
      if (followingUser) {
        let tapArr: IFirebasePost[] = [];
        const followingList = Object.keys(followingUser);
        postList.forEach((el) => {
          if (followingList.includes(el.userConfig.uid)) {
            tapArr.push(el);
          }
        });
        setPostList(() => [...tapArr]);
      } else {
        setPostList([]);
      }
    }
  };

  return (
    <MainBoard>
      <TabContainer>
        <Tab $isLoggedIn={isLoggedIn} onClick={() => setCategory(false)}>
          최신탭
        </Tab>
        {isLoggedIn && (
          <Tab $isLoggedIn={isLoggedIn} onClick={() => setCategory(true)}>
            팔로우탭
          </Tab>
        )}
      </TabContainer>
      <ItemList itemList={postList} />
      {/* <Posts>
        {postList.map((post: IFirebasePost) => (
          <Post key={post.id}>
            <Link href={"posts/" + post?.id}>
              <Title>{post?.title}</Title>
              <Content>{post?.description}</Content>
            </Link>
            <MetaItem item={post} />
          </Post>
        ))}
      </Posts> */}
    </MainBoard>
  );
}
