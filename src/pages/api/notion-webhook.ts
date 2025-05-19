import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";
import { GITHUB_OWNER, GITHUB_REPO, GITHUB_TOKEN } from "../../../const.ts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed'" });

  console.log("Headers, ", req.headers);
  console.log("Body, ", req.body);
  try {
    if (req.body && req.body.type === "url_verification") {
      console.log("URL 검증 요청 받음!");
      return res.status(200).json({ challenge: req.body.challenge });
    }
    const octokit = new Octokit({ auth: GITHUB_TOKEN });
    if (GITHUB_OWNER && GITHUB_REPO) {
      await octokit.repos.createDispatchEvent({
        owner: GITHUB_OWNER ?? GITHUB_OWNER,
        repo: GITHUB_REPO ?? GITHUB_REPO,
        event_type: "notion-update",
        client_payload: {
          timestamp: new Date().toISOString(),
        },
      });
    }

    res.setHeader("Content-Type", "application/json");

    const notionSignature = req.headers["x-notion-signature"];
    console.log(notionSignature);

    return res.status(200).json({ success: "Webhook processed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
}
