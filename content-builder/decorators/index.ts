import { MdBlock } from "notion-to-md/build/types";
import { calloutDecorator } from "./callout";
import { imageDecorator } from "./image";
import { toggleDecorator } from "./toggle";

const decorators = {
  callout: ({ mdBlock }: { mdBlock: MdBlock }) => calloutDecorator({ mdBlock }),
} as const;

export function decorate(mdBlock: MdBlock) {
  const handler = decorators[mdBlock.type as keyof typeof decorators];

  if (!handler) {
    return mdBlock;
  }

  return handler({
    mdBlock,
  });
}
