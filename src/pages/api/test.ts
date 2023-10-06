import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 클라이언트에서 보낸 마크다운 내용
  const { title, content } = req.body;
  if (!title && !content) return;
  let reTitle = "";
  if (title.includes("#")) {
    reTitle = title.split("#")[1].trim().split("\n")[0];
  } else {
    reTitle = title.trim().split("\n")[0];
  }

  // const title = data.split("#")[1].trim().split("\n")[0];
  const slog = reTitle.replaceAll(" ", "-").replaceAll(".", "");
  // if (!title) return;

  const meta = `---
title: ${reTitle}
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
