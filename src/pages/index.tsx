import Link from "next/link";
import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import { Fragment } from "react";

interface props {
  metaArr: [{ title: string; slog: string; created_at: string }];
  consoleData: any;
}

export default function Home({ metaArr }: props) {
  if (!window.indexedDB) {
    alert(
      "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
    );
  } else {
    // window.indexedDB = window.indexedDB;
    // window.IDBTransaction = window.IDBTransaction;
    // window.IDBKeyRange = window.IDBKeyRange;
    const req = window.indexedDB.open("test", 2);
    req.onerror = function (e) {
      console.log("error ", e);
    };
    req.onupgradeneeded = function (e) {
      console.log("su", e);
      // Save the IDBDatabase interface
      if (!e.target) return;
      var db = e.target.result;
      console.log(db);

      // Create an objectStore for this database
      var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
      console.log(objectStore);
    };
  }
  return (
    <div>
      <h1>Hello, my Blog</h1>
      <h3>Blog List</h3>
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
  console.log(path.join("post/slog"));
  console.log(file);

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
