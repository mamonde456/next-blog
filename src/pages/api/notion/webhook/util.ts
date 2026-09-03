import { getNotionPage } from "@/features/blog/api/notion";
import { notion } from "@/lib/notion/client";
import { NotionWebhooksPayload } from "@/shared/notion/notion-webhooks";
import { buildVelogMarkdown } from "content-builder/velog/buildVelogMarkdown";
import { createVelogPost } from "content-builder/velog/createVelogPost";
import { syncVelogPost } from "content-builder/velog/syncVelogPost";
import { findVelogPost } from "content-builder/velog/utils";

const SUPPORTED_EVENTS = new Set([
  "page.content_updated",
  "page.properties_updated",
]);

export async function handleNotionPageUpdate(webhook: NotionWebhooksPayload) {
  // 1. 이벤트 종류 확인
  // 2. 원본 페이지 조회
  // 3. 발행 준비 여부 확인
  // 4. markdown 생성
  // 5. syncVelogPost

  const { type } = webhook;
  const pageId = webhook.entity.id;

  if (!SUPPORTED_EVENTS.has(type)) return;
  // page.created 무시

  const markdown = await buildVelogMarkdown(pageId);
  const page = await notion.pages.retrieve({
    page_id: pageId,
  });
  const existingPage = await findVelogPost(pageId);

  console.log("[FIND VELOG POST]", {
    pageId,
    existingPageId: existingPage?.id,
  });
  // 데이터베이스의 제목 속성 이름
  const titlePropertyName = "이름";

  const titleProperty = page.properties[titlePropertyName];
  const title = titleProperty?.title?.[0]?.plain_text;

  if (!title) {
    console.error("제목을 찾을 수 없습니다.");
    return;
  }

  await syncVelogPost({
    sourcePageId: pageId,
    title: title,
    markdown: markdown,
  });
}
