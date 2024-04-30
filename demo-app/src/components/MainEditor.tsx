import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
import 'remixicon/fonts/remixicon.css'
export default function MainEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<h2>Jason ng</h2>`
  })
  return <>
    {editor ? <Menubar editor={editor} /> : null}
    <EditorContent editor={editor} />
  </>
}