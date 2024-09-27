import Link from "next/link";
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainMenu from "@/components/common/MainMenu";
import MainPosts from "@/components/blog/MainPosts";
import { IFirebasePost, IMeta } from "@/types/blog";
import { getAllPostsFromFirebase } from "@/utils/\bblog";
import { formatTimestampToDateStr } from "@/utils/common";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  background: white;
  border-radius: 10px;
`;

const SideMenuList = styled.div`
  flex: 2;
  width: 300px;
  height: 100%;
`;

const Search = styled.div`
  width: 100%;
  padding: 10px;
  height: 10%;
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  svg {
    position: absolute;
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
  &::placeholder {
    color: #9e9ea7;
  }
  &:focus,
  &:hover {
    outline: none;
    border-color: rgba(76, 84, 234, 0.4);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(76 84 234 / 10%);
  }
`;

const SearchList = styled.ul`
  width: 95%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 85px;
`;
const SearchItem = styled.li`
  padding: 10px;
  &:hover {
    background-color: #eee;
  }
`;

export default function Home({ postList }: { postList: IFirebasePost[] }) {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState<IFirebasePost[]>([]);

  useEffect(() => {
    if (keyword) {
      const result: IFirebasePost[] = postList.filter((post) => {
        const content = encodeURIComponent(post.content);
        if (
          post.title.includes(keyword) ||
          content.includes(keyword) ||
          post.description.includes(keyword)
        ) {
          return post;
        }
      });
      setSearchResult(result);
    }
  }, [keyword]);

  return (
    <Wrapper>
      <MainMenu />
      <MainPosts postList={postList} />
      <SideMenuList>
        <Search>
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <Input
            placeholder="Search"
            type="search"
            className="input"
            onInput={(e) => setKeyword(e.currentTarget.value)}
          />
          {keyword && (
            <>
              {searchResult.length > 0 ? (
                <SearchList>
                  {searchResult?.map((item) => (
                    <SearchItem key={item.id}>
                      <Link href={`/posts/${item.id}`}>
                        <div>{item.title}</div>
                        <div>
                          @
                          {item.userConfig.displayName ||
                            item.userConfig.email.split("@")[0]}
                        </div>
                      </Link>
                    </SearchItem>
                  ))}
                </SearchList>
              ) : (
                <SearchList>
                  <SearchItem>검색 결과가 없습니다.</SearchItem>
                </SearchList>
              )}
            </>
          )}
        </Search>
      </SideMenuList>
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  // const file = await fs.readdir(path.join("__post"));

  // const metaArr = [];
  // for (let i = 0; i < file.length; i++) {
  //   const readFile = await fs.readFile(path.join(`__post/${file[i]}`));
  //   const { data: frontmatter } = matter(readFile);
  //   frontmatter.created_at = new Date(frontmatter.created_at).toISOString();
  //   metaArr.push(frontmatter);
  // }
  // const sortFrontmatter = metaArr.sort(
  //   (a, b) =>
  //     new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  // );
  // return { props: { sortFrontmatter } };

  const posts = await getAllPostsFromFirebase();
  if (posts !== null) {
    const postList = posts?.map((post) => {
      if (
        typeof post.created_at !== "string" &&
        typeof post.update_at !== "string"
      ) {
        return {
          ...post,
          created_at: formatTimestampToDateStr(post.created_at),
          update_at: formatTimestampToDateStr(post.update_at),
        };
      }
      return post;
    });
    return { props: { postList } };
  }
  return { props: { postList: null } };
};
