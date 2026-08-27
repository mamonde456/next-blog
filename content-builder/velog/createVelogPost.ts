import { createPage } from "@/features/builder/api/notion/cratePage";
import { chunkText } from "./utils";
import { VELOG_DATABASE_ID } from "const";

type CreateVelogPostParams = {
  title: string;
  markdown: string;
  sourcePageId: string;
};

export const createVelogPost = async ({
  title,
  markdown,
  sourcePageId,
}: CreateVelogPostParams) => {
  // 1. 결과 DB에 페이지 생성
  // 2. Markdown을 code block으로 삽입
  // 3. sourcePageId를 결과 페이지 property에 기록
  if (VELOG_DATABASE_ID) {
    await createPage({
      parent: {
        database_id: VELOG_DATABASE_ID,
      },

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

        "Source Page ID": {
          rich_text: [
            {
              text: {
                content: sourcePageId,
              },
            },
          ],
        },
      },

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
  }
};
