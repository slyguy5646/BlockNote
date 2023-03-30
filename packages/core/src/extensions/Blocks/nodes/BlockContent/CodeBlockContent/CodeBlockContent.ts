import { mergeAttributes, Node } from "@tiptap/core";
import styles from "../../Block.module.css";

export const CodeSection = Node.create({
  name: "codeSection",
  group: "blockContent",
  content: "inline*",

  parseHTML() {
    return [
      {
        tag: "code",
        priority: 200,
        node: "codeSection",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, {
        class: styles.blockContent,
        "data-content-type": this.name,
      }),
      ["code", 0],
    ];
  },
});
