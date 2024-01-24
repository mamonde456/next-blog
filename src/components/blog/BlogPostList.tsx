import useAuth from "@/hook/useAuth";
import { getCurrentUserFollowing } from "@/utils/user";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 65%;
  height: 100%;
  padding: 10px;
`;
const PostTitle = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  padding: 5px;
  border-bottom: solid 1px black;
  z-index: 10;
`;

const BoxList = styled.div`
  width: 90%;
  display: grid;
  grid-area: wrap;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 10px;
`;

const PostItCont = styled.div`
  width: 85%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
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
    -webkit-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2)); /* Safari */
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
  }
  &:nth-child(odd) {
    border-bottom-left-radius: 10px 10px;
    -webkit-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2)); /* Safari */
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
      -webkit-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2)); /* Safari */
      filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
      z-index: 3;
    }
  }
`;
const PostIt = styled.div`
  margin: 20px;
  background-color: #ffffa5;
  width: 180px;
  height: 150px;
  padding: 10px;
  padding-top: 25px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
`;
const PostItTitle = styled.div`
  width: 100%;
  border-bottom: solid 1px;
  padding-bottom: 4px;
  margin-bottom: 8px;
  font-size: 18px;
`;
const PostItNote = styled.div`
  max-height: 80px;
  height: 100%;
  font-size: 13px;
  text-align: justify;
  padding: 0 21px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
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
    <Wrapper>
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
            <Link key={el?.slog} href={`/posts/${el?.slog}`}>
              <PostItCont>
                <PostIt>
                  <PostItTitle>{el?.title}</PostItTitle>
                  <small>{el?.created_at.slice(0, 10)}</small>
                  <PostItNote>{el?.description}</PostItNote>
                </PostIt>
              </PostItCont>
            </Link>
          ))}
        </BoxList>
      ) : (
        <BoxList>
          {postList?.map((el) => (
            <Link key={el?.slog} href={`/posts/${el?.id}`}>
              <PostItCont>
                <PostIt>
                  <PostItTitle>{el?.title}</PostItTitle>
                  <small>{el?.created_at.slice(0, 10)}</small>
                  <PostItNote>{el?.description}</PostItNote>
                </PostIt>
              </PostItCont>
            </Link>
          ))}
        </BoxList>
      )}
    </Wrapper>
  );
}
