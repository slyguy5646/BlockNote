import { Node } from "@tiptap/core";
import { BlockContainer } from "./nodes/BlockContainer";
import { BlockGroup } from "./nodes/BlockGroup";
import { ParagraphBlockContent } from "./nodes/BlockContent/ParagraphBlockContent/ParagraphBlockContent";
import { HeadingBlockContent } from "./nodes/BlockContent/HeadingBlockContent/HeadingBlockContent";
import { BulletListItemBlockContent } from "./nodes/BlockContent/ListItemBlockContent/BulletListItemBlockContent/BulletListItemBlockContent";
import { NumberedListItemBlockContent } from "./nodes/BlockContent/ListItemBlockContent/NumberedListItemBlockContent/NumberedListItemBlockContent";
import { CodeSection } from "./nodes/BlockContent/CodeBlockContent/CodeBlockContent";

export const blocks: any[] = [
  ParagraphBlockContent,
  HeadingBlockContent,
  BulletListItemBlockContent,
  NumberedListItemBlockContent,
  BlockContainer,
  BlockGroup,
  CodeSection,
  Node.create({
    name: "doc",
    topNode: true,
    content: "blockGroup",
  }),
];
