import useAuth from "@/hook/useAuth";
import { getCurrentUserFollowing } from "@/utils/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PostTitle = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  padding: 5px;
  border-bottom: solid 1px black;
  z-index: 10;
`;

const BoxList = styled.div`
  width: 100%;
  display: grid;
  grid-area: wrap;
  grid-template-columns: repeat(3, 1fr);
`;

interface IProps {
  metaList: [
    {
      title: string;
      slog: string;
      created_at: string;
      owner: { [index: string]: string };
    }
  ];
  keyword: string;
}
export default function BlogPostList({ metaList, keyword }: IProps) {
  const [category, setCategory] = useState(false);
  const [postList, setPostList] = useState<any>([]);

  const isLoggedIn = useAuth();

  useEffect(() => {
    setPostList([]);
    const result = metaList.filter(
      (el) => el.title && String(el.title).includes(keyword)
    );
    setPostList(result);
  }, [keyword]);

  useEffect(() => {
    if (category) {
      setFollowingTab();
    } else {
      setPostList(metaList);
    }
  }, [category]);

  const setFollowingTab = async () => {
    setPostList([]);
    const userInfo = window.sessionStorage.getItem("userInfo");
    const userId = userInfo && JSON.parse(userInfo).uid;
    console.log(userId);
    const data = await getCurrentUserFollowing(userId);
    console.log(data);
    if (data) {
      let tapArr: any = [];
      const followingList = Object.keys(data);
      metaList.forEach((el) => {
        if (followingList.includes(el.owner.id)) {
          tapArr.push(el);
        }
      });
      setPostList(() => [...tapArr]);
    } else {
      setPostList([
        { title: "팔로우가 없습니다!", slog: "", created_at: " string" },
      ]);
    }
  };
  return (
    <div>
      <PostTitle>
        <h3>Blog List</h3>
        <div>
          <span onClick={() => setCategory(false)}>최신탭</span>
          {isLoggedIn && (
            <span onClick={() => setCategory(true)}>팔로우탭</span>
          )}
        </div>
      </PostTitle>
      {category ? (
        <BoxList>
          {postList?.map((el) => (
            <Link key={el.slog} href={`/posts/${el.slog}`}>
              <div className="postItCont">
                <div className="postIt">
                  <div className="titulo">{el.title}</div>
                  <small>{el.created_at.slice(0, 10)}</small>
                  <div className="nota">
                    Lorem ipsum dolor venenatis velit nunc, porta pharetra
                    ligula interdum mollis.
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </BoxList>
      ) : (
        <BoxList>
          {postList?.map((el) => (
            <Link key={el.slog} href={`/posts/${el.slog}`}>
              <div className="postItCont">
                <div className="postIt">
                  <div className="titulo">{el.title}</div>
                  <small>{el.created_at.slice(0, 10)}</small>
                  <div className="nota">{el.content}</div>
                </div>
              </div>
            </Link>
          ))}
        </BoxList>
      )}
    </div>
  );
}
