import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { getAllPostsFromFirebase } from "@/utils/\bblog";
import { IFirebasePost } from "@/types/blog";
import Link from "next/link";
import { getCurrentUserFollowing } from "@/utils/user";
import useAuth from "@/hook/useAuth";
import MetaItem from "../ui/meta/MetaItem";
import ItemList from "../ui/ItemList";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../../../firebase";

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

export default function MainPosts({ postList }: { postList: IFirebasePost[] }) {
  // const [category, setCategory] = useState<"latest" | "following">("latest");
  // const [displayPosts, setDisplayPosts] = useState<IFirebasePost[]>([]);
  const isLoggedIn = useAuth();

  /*
  useEffect(() => {
    const userInfo = window.sessionStorage.getItem("userInfo");
    if (userInfo != null) {
      // 로그인
      if (category === "following") {
        // 팔로우탭
        setCategory("following");
        // updateFollowingPosts(postList);
        // setDisplayPosts(updateFollowingPosts(postList));
      } else if (category === "latest") {
        // 최신탭
        setCategory("latest");
        // setDisplayPosts(postList);
      }
    } else {
      // 최신탭
      setCategory("latest");
      // setDisplayPosts(postList);
    }
  }, [category]);
*/

  const getFollowingUser = async () => {
    const userInfo = window.sessionStorage.getItem("userInfo");
    const userId = userInfo && JSON.parse(userInfo).uid;
    const followingUser = await getCurrentUserFollowing(userId);
    return followingUser;
  };

  const updateFollowingPosts = (postList: IFirebasePost[]) => {
    const followingUser = getFollowingUser();
    if (followingUser) {
      const followingList = Object.keys(followingUser);
      return postList.filter((el) => followingList.includes(el.userConfig.uid));
    } else {
      return [];
    }
  };

  return (
    <MainBoard>
      <TabContainer>
        <Tab
          $isLoggedIn={isLoggedIn}
          // onClick={() => setCategory("latest")}
        >
          최신탭
        </Tab>
        {isLoggedIn && (
          <Tab
            $isLoggedIn={isLoggedIn}
            // onClick={() => setCategory("following")}
          >
            팔로우탭
          </Tab>
        )}
      </TabContainer>
      <ItemList itemList={postList} />
    </MainBoard>
  );
}
