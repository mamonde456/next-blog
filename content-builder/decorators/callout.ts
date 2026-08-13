import { Decorator } from "./type";
import { wrapTag } from "./util";

export const calloutDecorator: Decorator = ({ mdBlock }) => {
  return {
    ...mdBlock,
    parent: wrapTag("notion-callout", mdBlock.parent),
  };
};
