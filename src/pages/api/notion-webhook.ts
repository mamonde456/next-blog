import { NextApiRequest, NextApiResponse } from "next";
import {
  NotionWebhooksPayload,
  triggerGitHubAction,
} from "@/shared/notion/notion-webhooks.ts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req) return;
  console.log("Headers, ", req.headers);
  console.log("Body, ", req.body);
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed'" });

  try {
    if (req.body && req.body.type === "url_verification") {
      console.log("URL 검증 요청 받음!");
      return res.status(200).json({ challenge: req.body.challenge });
    }

    // 웹훅 타입이 페이지인지
    // 변경된 부모가 데이터베이스인지
    // 변경된 부모의 데이터베이스가 요구하는 데이터 베이스 id인지
    // 변경한 것이 제목/업로드 태그 변경/내용인지 확인

    // 웹훅 알림이 오면, 캐시파일을 재갱신. < 깃헙 액션 실행

    const notionRes: NotionWebhooksPayload = req.body;
    const result = await triggerGitHubAction(notionRes);
    if (result) console.log("성공");
    else console.log("실패");

    res.setHeader("Content-Type", "application/json");

    const notionSignature = req.headers["x-notion-signature"];
    console.log(notionSignature);

    return res.status(200).json({ success: "Webhook processed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
}
