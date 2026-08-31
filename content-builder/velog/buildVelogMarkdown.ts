import { n2m } from "@/lib/notion/client";
import { decorate } from "../decorators";

export const buildVelogMarkdown = async (pageId: string) => {
  const mdBlocks = await n2m.pageToMarkdown(pageId);

  // const decorateBlocks = mdBlocks.map(decorate);

  return mdBlocks.map((block) => block.parent).join("\n\n");
  // return decorateBlocks.map((block) => block.parent).join("\n\n");
};
