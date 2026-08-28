import { updatePage } from "@/features/builder/api/notion/updatePage";
import { chunkText } from "./utils";
import { notion } from "@/lib/notion/client";
import { isFullBlock } from "@notionhq/client";

type UpdateVelogPostParams = {
  pageId: string;
  title?: string;
  markdown?: string;
};

export const updateVelogPost = async ({
  pageId,
  title,
  markdown,
}: UpdateVelogPostParams) => {
  // title 업데이트
  if (title) {
    await updatePage({
      page_id: pageId,
      properties: {
        이름: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
      },
    });
  }
  if (!markdown) return;
  // 본문 업데이트
  // 페이지 본문 블럭 찾기 -> 코드 블럭 찾기 -> 코드 블럭 삭제 -> 새로운 코드 블럭 업데이트
  const { results } = await notion.blocks.children.list({
    block_id: pageId,
  });

  const codeBlock = results.find(
    (block) => isFullBlock(block) && block.type === "code"
  );

  if (codeBlock) {
    await notion.blocks.delete({
      block_id: codeBlock.id,
    });
  }
  await notion.blocks.children.append({
    block_id: pageId,
    children: [
      {
        object: "block",
        type: "code",
        code: {
          rich_text: chunkText(markdown).map((content) => ({
            type: "text",
            text: {
              content,
            },
          })),
          language: "markdown",
        },
      },
    ],
  });
};
