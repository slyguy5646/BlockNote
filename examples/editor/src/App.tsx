// import logo from './logo.svg'
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import styles from "./App.module.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { BlockNoteEditor } from "../../../packages/core/src/BlockNoteEditor";

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

function App() {
  const [content, setContent] = useState<any>();
  const [loadOld, setLoadOld] = useState<boolean>(false);
  const editor: BlockNoteEditor = useBlockNote({
    onEditorContentChange: (editor: BlockNoteEditor) => {
      console.log(editor.topLevelBlocks);
      setContent(editor?.getContentHTML);
    },

    editorDOMAttributes: {
      class: styles.editor,
      "data-test": "editor",
    },
  });

  async function loadInitialBlocks() {
    editor.replaceBlocks(
      editor.topLevelBlocks,
      await editor.HTMLToBlocks(
        '<div class="_blockGroup_1xym9_26" data-node-type="blockGroup"><div data-id="f1cf445f-0fe4-4935-8fa5-e9dbda75df16" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="f1cf445f-0fe4-4935-8fa5-e9dbda75df16" class="_block_1xym9_5" data-node-type="blockContainer"><div data-level="1" class="_blockContent_1xym9_10" data-content-type="heading"><h1>Hello world</h1></div></div></div><div data-id="22d509b6-3c95-4ec2-8d0c-413bbf9acc89" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="22d509b6-3c95-4ec2-8d0c-413bbf9acc89" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="paragraph"><p>how are you guys this is very cool</p></div></div></div><div data-id="1365d497-6c10-4439-b94c-9861bac9d70b" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="1365d497-6c10-4439-b94c-9861bac9d70b" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="bulletListItem"><p>number one</p></div></div></div><div data-id="64852587-fc27-4629-b9f2-1276dce45d7a" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="64852587-fc27-4629-b9f2-1276dce45d7a" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="bulletListItem"><p>number two</p></div></div></div><div data-id="fdeb191e-7585-475b-85f4-c321094a3463" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="fdeb191e-7585-475b-85f4-c321094a3463" class="_block_1xym9_5" data-node-type="blockContainer"><div data-index="1" class="_blockContent_1xym9_10" data-content-type="numberedListItem"><p>Task</p></div></div></div><div data-id="6080a662-1a9d-47bc-a687-aaae757b0823" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="6080a662-1a9d-47bc-a687-aaae757b0823" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="paragraph"><p></p></div></div></div><div data-id="4b3453cc-7932-47f5-96ef-4ec5c660bbc0" class="_blockOuter_1xym9_5" data-node-type="block-outer"><div data-id="4b3453cc-7932-47f5-96ef-4ec5c660bbc0" class="_block_1xym9_5" data-node-type="blockContainer"><div class="_blockContent_1xym9_10" data-content-type="paragraph"><p></p></div></div></div></div>'
      )
    );
  }

  useEffect(() => {
    loadInitialBlocks();
  }, [loadOld]);


  // Give tests a way to get prosemirror instance
  (window as WindowWithProseMirror).ProseMirror = editor?._tiptapEditor;

  return (
    <div>
      <button
        onClick={() => {
          setLoadOld(!loadOld);
        }}>
        Load Old
      </button>
      {/* <div style={{color: 'black'}}>{JSON.stringify(content)}</div> */}
      <BlockNoteView editor={editor} />
    </div>
  );
}

export default App;
