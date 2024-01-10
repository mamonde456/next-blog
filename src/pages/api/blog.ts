import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 클라이언트에서 보낸 마크다운 내용
  const { title, content, userConfig } = req.body;
  if (!title && !content) return;

  const slog = replaceTitleWithSlog(title);
  const koreanTime = getKoreanTime();
  const combinedContent = generateAndCombineMetaData(
    {
      title,
      slog,
      content,
      koreanTime,
    },
    userConfig
  );
  const filePath = configureFilePath(slog);

  // 비동기적으로 파일 작성
  fs.writeFile(filePath, combinedContent)
    .then(() => {
      res.status(200).json({ message: "Success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
}

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
  title: string;
  slog: string;
  content: string;
  koreanTime: string;
}

const generateAndCombineMetaData = (
  { title, slog, content, koreanTime }: metaType,
  userConfig: {
    displayName: string;
    email: string;
    photoUrl: string;
    uid: string;
  }
) => {
  const meta = `---
title: ${title}
slog: ${slog}
created_at: ${koreanTime}
owner: {
  photoUrl: ${userConfig.photoUrl},
  id: ${userConfig.uid},
  displayName: ${userConfig.displayName},
  email: ${userConfig.email},
}
---`;

  return `${meta}\n${content}`;
};

const configureFilePath = (slog: string) => {
  // 파일명 설정 (공백을 '-' 로 치환)
  const fileName = `${slog}.md`;
  // 파일 경로 설정
  return path.join(process.cwd(), "__post", fileName);
};
