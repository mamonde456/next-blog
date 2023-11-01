import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 클라이언트에서 보낸 마크다운 내용
  const { title, content } = req.body;
  if (!title && !content) return;

  const textReplaceAll = (text: string) => {
    const spacesRegExp = /\s+/g;
    const unsafeTextRegExp = /[^a-zA-Z0-9-_가-힣]/g;
    const multipleHyphensRegExp = /-+/g;

    const title = text
      .trim()
      .replace(spacesRegExp, "-") // 공백을 하이픈으로 변경
      .replace(unsafeTextRegExp, "") // 특수 문자 제거
      .replace(multipleHyphensRegExp, "-"); // 연속된 하이픈을 단일 하이픈으로 변경

    if (title) {
      return title;
    }
    return uuidv4();
  };

  const slog = textReplaceAll(title);

  const meta = `---
title: ${title}
slog: ${slog}
created_at: ${new Date().toLocaleDateString()}
---`;

  const reContent = `${meta}\n${content}`;

  // 파일명 설정 (공백을 '-' 로 치환)
  const fileName = `${slog}.md`;
  // 파일 경로 설정
  const filePath = path.join(process.cwd(), "__post", fileName);

  // 비동기적으로 파일 작성
  fs.writeFile(filePath, reContent)
    .then(() => {
      res.status(200).json({ message: "Success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    });
}
