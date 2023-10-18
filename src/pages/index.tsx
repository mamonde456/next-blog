import Link from "next/link";
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

interface props {
  metaArr: [{ title: string; slog: string; created_at: string }];
  consoleData: any;
}

const Box = styled.div``;

export default function Home({ metaArr }: props) {
  return (
    <div>
      <h1>Hello, my Blog</h1>
      <h3>Blog List</h3>
      <Link href={"saves"}>임시글</Link>
      <div>
        <>
          {metaArr?.map((el) => (
            <Fragment key={el.slog}>
              <p>
                <Link href={`/posts/${el.slog}`}>{el.title}</Link>
              </p>
            </Fragment>
          ))}
        </>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const file = await fs.readdir(path.join("__post"));
  // console.log(path.join("post/slog"));
  // console.log(file);

  const metaArr = [];
  for (let i = 0; i < file.length; i++) {
    const readFile = await fs.readFile(path.join(`__post/${file[i]}`));
    const { data: frontmatter } = matter(readFile);
    // console.log(content);
    metaArr.push(frontmatter);
    // console.log("file", file[i]);
    // console.log("readFile", readFile);
    // fs.mkdir(path.join(`post/${frontmatter.slog}`));
  }
  return { props: { metaArr } };
};
