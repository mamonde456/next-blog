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
