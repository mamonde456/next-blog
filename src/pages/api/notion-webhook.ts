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
    const body = req.body;
    // Webhook verification (Notion 전용)
    if (body?.verification_token) {
      console.log(
        "[NOTION WEBHOOK VERIFICATION TOKEN]",
        body.verification_token
      );

      return res.status(200).json({ ok: true });
    }

    // Normal webhook event
    const webhook: NotionWebhooksPayload = body;
    const notionSignature = req.headers["x-notion-signature"];
    console.log("[NOTION SIGNATURE]", notionSignature);

    await triggerGitHubAction(webhook);

    return res.status(200).json({ success: "Webhook processed successfully" });
  } catch (error) {
    console.log("[NOTION WEBHOOK ERROR]", error);
    return res.status(500).json({ error: "Failed to process webhook" });
  }
}
