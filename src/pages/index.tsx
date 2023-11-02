import Link from "next/link";
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

interface props {
  sortFrontmatter: [{ title: string; slog: string; created_at: string }];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
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

const BoxList = styled.div`
  display: grid;
  grid-area: wrap;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 10px;
`;
const Box = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: #ece6e6;
  text-align: center;
  overflow: hidden;
  padding: 10px;
`;

export default function Home({ sortFrontmatter }: props) {
  return (
    <Wrapper>
      <InfoList>
        <h1>Hello, my Blog</h1>
        <nav>
          <Link href={"/"}>게시글</Link>
          <Link href={"saves"}>임시글</Link>
        </nav>
      </InfoList>
      <div>
        <h3>Blog List</h3>
        <BoxList>
          {sortFrontmatter?.map((el) => (
            <Link key={el.slog} href={`/posts/${el.slog}`}>
              <Box>
                <p>{el.title}</p>
                <small>{el.created_at}</small>
              </Box>
            </Link>
          ))}
        </BoxList>
      </div>
    </Wrapper>
  );
}

export const getStaticProps = async () => {
  const file = await fs.readdir(path.join("__post"));

  const metaArr = [];
  for (let i = 0; i < file.length; i++) {
    const readFile = await fs.readFile(path.join(`__post/${file[i]}`));
    const { data: frontmatter } = matter(readFile);
    frontmatter.created_at = new Date(frontmatter.created_at).toISOString();
    metaArr.push(frontmatter);
  }
  const sortFrontmatter = metaArr.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return { props: { sortFrontmatter } };
};
