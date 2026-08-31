import { Decorator } from "./type";
import { wrapTag } from "./util";

export const calloutDecorator: Decorator = ({ mdBlock }) => {
  return {
    ...mdBlock,
    parent: mdBlock.parent,
  };
};
