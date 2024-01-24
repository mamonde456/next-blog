import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import matter from "gray-matter";

interface IMethodType {
  [index: string]: () => void;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method || "";
  // req method 분기 처리
  const methodType: IMethodType = {
    GET: () => getMdFile(req, res), // md 파일 불러오기
    POST: () => createMdFileFromPost(req, res), // md 파일 생성
    PUT: () => updateMdFile(req, res), // md 파일 수정
    DELETE: () => deleteMdFile(req, res),
  };

  if (methodType[method]) methodType[method]();
  else {
    res.setHeader("Allow", ["GET", "PUT", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getMdFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const selectedFile = [];
  const files = await fs.readdir(path.join("__post"));
  try {
    for (let i = 0; i < files.length; i++) {
      const readFile = await fs.readFile(path.join(`__post/${files[i]}`));
      const { data: matterData, content } = matter(readFile);
      if (matterData.id === id) {
        selectedFile.push(matterData, content);
        break;
      }
    }
    res.status(200).json(selectedFile);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteMdFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  console.log(id);
  const files = await fs.readdir(path.join("__post"));
  try {
    for (let i = 0; i < files.length; i++) {
      const readFile = await fs.readFile(path.join(`__post/${files[i]}`));
      const { data: matterData } = matter(readFile);
      if (matterData.id === id) {
        await fs.unlink(path.join("__post", `${id}.md`));
        break;
      }
    }
    res.status(200).end("file deleted successfully");
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateMdFile = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, title, description, content, userConfig } = req.body;
  if (!title && !content) return;
  const currentKrTime = getKoreanTime();
  const files = await fs.readdir(path.join("__post"));
  try {
    for (let i = 0; i < files.length; i++) {
      const readFile = await fs.readFile(path.join(`__post/${files[i]}`));
      const { data: matterData } = matter(readFile);
      if (id === matterData.id) {
        const newContent = generateAndCombineMetaData(
          {
            id,
            title,
            description,
            slog: matterData.slog,
            content,
            koreanTime: matterData.created_at,
            updateTime: currentKrTime,
          },
          userConfig
        );
        await fs.writeFile(path.join(`__post/${files[i]}`), newContent);
        return;
      }
    }
    res.status(200).end("ok");
  } catch (error) {
    res.status(404).end(error);
  }
};

const createMdFileFromPost = (req: NextApiRequest, res: NextApiResponse) => {
  // 클라이언트에서 보낸 마크다운 내용
  const { id, title, description, content, userConfig } = req.body;
  if (!title && !content) return;

  const slog = replaceTitleWithSlog(title);
  const koreanTime = getKoreanTime();
  const combinedContent = generateAndCombineMetaData(
    { id, title, description, slog, content, koreanTime, updateTime: "" },
    userConfig
  );
  const filePath = configureFilePath(id);

  // 비동기적으로 파일 작성
  fs.writeFile(filePath, combinedContent)
    .then(() => {
      res.status(200).json({ message: "Success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
};

const replaceTitleWithSlog = (title: string) => {
  const spacesRegExp = /\s+/g;
  const unsafeTextRegExp = /[^a-zA-Z0-9-_가-힣]/g;
  const multipleHyphensRegExp = /-+/g;

  const slog = title
    .trim()
    .replace(spacesRegExp, "-") // 공백을 하이픈으로 변경
    .replace(unsafeTextRegExp, "") // 특수 문자 제거
    .replace(multipleHyphensRegExp, "-"); // 연속된 하이픈을 단일 하이픈으로 변경

  if (slog) {
    return slog;
  } else {
    return uuidv4();
  }
};

const getKoreanTime = () => {
  const now = new Date();
  now.setHours(now.getHours() + 9);
  return now.toISOString();
};

interface metaType {
  id: string;
  title: string;
  description: string;
  slog: string;
  content: string;
  koreanTime: string;
  updateTime: string;
}

const generateAndCombineMetaData = (
  { id, title, description, slog, content, koreanTime, updateTime }: metaType,
  userConfig: {
    displayName: string;
    email: string;
    photoUrl: string;
    uid: string;
  }
) => {
  // 메타 데이터에 추가시 띄어쓰기 주의
  const meta = `---
id: ${id}
title: ${title}
slog: ${slog}
created_at: ${koreanTime}
update_at: ${updateTime}
owner: {
  photoUrl: ${userConfig.photoUrl},
  id: ${userConfig.uid},
  displayName: ${userConfig.displayName},
  email: ${userConfig.email},
}
description: ${description}
---`;

  return `${meta}\n${content}`;
};

const configureFilePath = (id: string) => {
  // 파일명 설정 (공백을 '-' 로 치환)
  const fileName = `${id}.md`;
  // 파일 경로 설정
  return path.join(process.cwd(), "__post", fileName);
};
