import { MdBlock } from "notion-to-md/build/types";
import { decorate } from ".";

export const decorateBlocks = (mdBlocks: MdBlock[]) => {
  return mdBlocks.map((mdBlock) => decorate(mdBlock));
};
