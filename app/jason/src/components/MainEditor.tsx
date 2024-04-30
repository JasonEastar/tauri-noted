import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
import 'remixicon/fonts/remixicon.css'
export default function MainEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<h1>TabNoted</h1><pre><code>Jason Ng</code></pre><p>Xin chào, hãy nhập ghi chú ở dưới và format ở bên trên!</p>`
  })
  return <div className="wrapper">
  <div className="main_container">
  {editor ? <Menubar editor={editor} /> : null}
    <EditorContent editor={editor} />
  </div>
  </div>
}