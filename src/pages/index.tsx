import Link from "next/link";
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BlogNavbar from "@/components/blog/BlogNavbar";
import BlogPostList from "@/components/blog/BlogPostList";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const WhiteBoard = styled.div`
  width: 95%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  border: solid 4px black;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
  background-color: #ffffff;
`;

interface IProps {
  sortFrontmatter: [
    {
      title: string;
      slog: string;
      created_at: string;
      owner: { [index: string]: string };
    }
  ];
}

export default function Home({ sortFrontmatter: metaList }: IProps) {
  const [keyword, setKeyword] = useState("");
  const getKeyword = (keyword: string) => {
    setKeyword(keyword);
    console.log(keyword);
  };
  return (
    <Wrapper>
      <WhiteBoard>
        <BlogNavbar setKeyword={getKeyword} />
        <BlogPostList metaList={metaList} keyword={keyword} />
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
