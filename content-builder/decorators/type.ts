import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { MdBlock } from "notion-to-md/build/types";

export interface DecoratorContext {
  mdBlock: MdBlock;
  notionBlock?: BlockObjectResponse;
}

export type Decorator = (context: DecoratorContext) => MdBlock;
