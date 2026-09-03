import { createVelogPost } from "./createVelogPost";
import { updateVelogPost } from "./updateVelogPost";
import { findVelogPost } from "./utils";

type VelogPostParams = {
  sourcePageId: string;
  title: string;
  markdown: string;
};

export const syncVelogPost = async (params: VelogPostParams) => {
  const { sourcePageId, title, markdown } = params;
  const existingPage = await findVelogPost(sourcePageId);

  if (existingPage) {
    return updateVelogPost({
      pageId: existingPage.id,
      title,
      markdown,
    });
  }

  return createVelogPost({
    title: title,
    markdown,
    sourcePageId: sourcePageId,
  });
};
