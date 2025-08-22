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
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed'" });

  try {
    if (req.body && req.body.type === "url_verification") {
      console.log("URL 검증 요청 받음!");
      return res.status(200).json({ challenge: req.body.challenge });
    }

    const webhook: NotionWebhooksPayload = req.body;
    const result = await triggerGitHubAction(webhook);

    res.setHeader("Content-Type", "application/json");

    const notionSignature = req.headers["x-notion-signature"];
    console.log(notionSignature);

    return res.status(200).json({ success: "Webhook processed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
}
