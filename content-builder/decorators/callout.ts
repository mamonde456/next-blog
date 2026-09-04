import { Decorator } from "./type";

export const calloutDecorator: Decorator = ({ mdBlock }) => {
  return {
    ...mdBlock,
    parent: mdBlock.parent,
  };
};
