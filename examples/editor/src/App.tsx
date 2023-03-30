// import logo from './logo.svg'
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "./App.module.css";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  BlockNoteEditor,
  BlockNoteEditorOptions,
} from "../../../packages/core/src/BlockNoteEditor";
import { PartialBlock } from "../../../packages/core/src/extensions/Blocks/api/blockTypes";

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

function App() {
  const [content, setContent] = useState<any>();
  const [loadOld, setLoadOld] = useState<boolean>(false);
  const [initialBlocks, setInitialBlocks] = useState<PartialBlock[]>([]);
  const [editorConfig, setEditorConfig] = useState<
    Partial<BlockNoteEditorOptions>
  >({
    onEditorContentChange: (editor: BlockNoteEditor) => {
      console.log(editor.topLevelBlocks);
      setContent(editor?.contentHTML);
    },
    initialHTML:
      '<div class="_blockGroup_1xym9_26" data-node-type="blockGroup"><div data-id="a2ba5d95-2d0a-43b6-abfb-1ff267bd8d48" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="a2ba5d95-2d0a-43b6-abfb-1ff267bd8d48" class="_block_1xym9_5" data-node-type="blockContainer"><div data-level="1" class="_blockContent_1xym9_10" data-content-type="heading"><h1>Hello, World!</h1></div></div></div><div data-id="0721418b-181a-4cb7-859f-5db964e6b59c" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="0721418b-181a-4cb7-859f-5db964e6b59c" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="paragraph"><p></p></div></div></div><div data-id="fd40b073-70b9-41f9-acf8-084c98e66ed5" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="fd40b073-70b9-41f9-acf8-084c98e66ed5" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="paragraph"><p>hello, World!</p></div></div></div><div data-id="80e871ab-8901-4abe-8b0a-89bb375745c6" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="80e871ab-8901-4abe-8b0a-89bb375745c6" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="paragraph"><p></p></div></div></div><div data-id="a8c20c3f-ed11-45f6-ae66-fc503b2b1ad3" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="a8c20c3f-ed11-45f6-ae66-fc503b2b1ad3" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="bulletListItem"><p><span data-text-color="red">Hello</span></p></div></div></div><div data-id="a95f14b8-6a86-4772-a8f4-bcb132464528" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="a95f14b8-6a86-4772-a8f4-bcb132464528" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="paragraph"><p></p></div></div></div></div>',
    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
  });
  const editor: BlockNoteEditor = useBlockNote(editorConfig);

  // Give tests a way to get prosemirror instance
  (window as WindowWithProseMirror).ProseMirror = editor?._tiptapEditor;

  return (
    <div>
      <BlockNoteView editor={editor} />
    </div>
  );
}

export default App;
