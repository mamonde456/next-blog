import Link from "next/link";
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { set, ref, onValue, get, getDatabase, child } from "firebase/database";
import { getCurrentUserFollowing } from "@/utils/user";
import useLoggedIn from "@/hook/useLoggedIn";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  .postItCont {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
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

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  nav {
    display: flex;
    gap: 10px;
    justify-content: space-around;
    a {
      width: 100%;
      background: #ece6e6;
      padding: 10px;
      border-radius: 10px;
      text-align: center;
    }
  }
`;

const WhiteBoard = styled.div`
  width: 98%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border: solid 4px black;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  background-color: #ffffff;
  /* position: absolute; */
  /* background: red; */
`;
const PostTitle = styled.div`
  /* width: 100%; */
  /* height: 50px; */
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
  /* gap: 10px; */
  /* margin-top: 200px; */
  /* padding-top: 500px; */
`;
const StickyNote = styled.div`
  width: 250px;
  height: 200px;
  background-color: #ffd700;
  border: 1px solid #000000;
  padding: 15px;
  font-size: 16px;
  box-shadow: 8px 10px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: rotate(5deg);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
    -webkit-transition: ease 0.5s;
  }
`;
const SearchBox = styled.div``;

interface props {
  sortFrontmatter: [
    {
      title: string;
      slog: string;
      created_at: string;
      owner: { [index: string]: string };
    }
  ];
}

export default function Home({ sortFrontmatter }: props) {
  const [keyword, setKeyword] = useState("");
  const [searchList, setSearchList] = useState<any>([]);
  const [category, setCategory] = useState(false);
  const { isLoggedIn } = useLoggedIn();

  useEffect(() => {
    setSearchList([]);
    const result = sortFrontmatter.filter(
      (el) => el.title && String(el.title).includes(keyword)
    );
    setSearchList(result);
  }, [keyword]);

  useEffect(() => {
    if (category) {
      setFollowingTab();
    } else {
      setSearchList(sortFrontmatter);
    }
  }, [category]);

  const setFollowingTab = () => {
    setSearchList([]);
    const userInfo = window.sessionStorage.getItem("userInfo");
    const userId = userInfo && JSON.parse(userInfo).id;
    const data = getCurrentUserFollowing(userId);
    if (data) {
      let tapArr: any = [];
      const followingList = Object.keys(data);
      sortFrontmatter.forEach((el) => {
        if (followingList.includes(el.owner.id)) {
          tapArr.push(el);
        }
      });
      setSearchList(() => [...tapArr]);
    } else {
      setSearchList([
        { title: "팔로우가 없습니다!", slog: "", created_at: " string" },
      ]);
    }
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `followUsers/${userId}`)).then((snapshot) => {
    //   console.log(snapshot.exists());
    //   if (snapshot.exists()) {
    //     let tapArr: any = [];
    //     const followingList = Object.keys(snapshot.val());
    //     sortFrontmatter.forEach((el) => {
    //       if (followingList.includes(el.owner.id)) {
    //         tapArr.push(el);
    //       }
    //     });
    //     setSearchList(() => [...tapArr]);
    //   } else {
    //     console.log("No data available");
    //     setSearchList([
    //       { title: "팔로우가 없습니다!", slog: "", created_at: " string" },
    //     ]);
    //   }
    // });
  };
  return (
    <Wrapper>
      <WhiteBoard>
        <InfoList>
          <h1>Hello, my Blog</h1>
          <nav>
            <Link href={"/"}>게시글</Link>
            <Link href={"saves"}>임시글</Link>
          </nav>
          <SearchBox>
            <input
              type="search"
              onInput={(e) => setKeyword(e.currentTarget.value)}
            />
            <button>검색</button>
          </SearchBox>
        </InfoList>
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
              {searchList?.map((el) => (
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
                  {/* //   <StickyNote> */}
                  {/* //     <p>{el.title}</p> */}
                  {/* //   </StickyNote> */}
                </Link>
              ))}
            </BoxList>
          ) : (
            <BoxList>
              {searchList?.map((el) => (
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
      </WhiteBoard>
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const file = await fs.readdir(path.join("__post"));

  const metaArr = [];
  for (let i = 0; i < file.length; i++) {
    const readFile = await fs.readFile(path.join(`__post/${file[i]}`));
    const { data: frontmatter } = matter(readFile);
    console.log(frontmatter);
    frontmatter.created_at = new Date(frontmatter.created_at).toISOString();
    metaArr.push(frontmatter);
  }
  const sortFrontmatter = metaArr.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return { props: { sortFrontmatter } };
};
