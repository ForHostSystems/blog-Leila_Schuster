import React from "react";
import ReactQuill, { Quill } from "react-quill";

import BlotFormatter from "quill-blot-formatter/dist/BlotFormatter";

import "quill/dist/quill.snow.css";

Quill.register("modules/blotFormatter", BlotFormatter);

interface EditorProps {
  editorHtml: string;
  handleChange: (html: string) => void;
}

const Editor = ({ editorHtml, handleChange }: EditorProps) => {
  return (
    <ReactQuill onChange={handleChange} value={editorHtml} bounds="#root" modules={Editor.modules} formats={Editor.formats} />
  );
};

export default Editor;

Editor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    [{ direction: "rtl" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  blotFormatter: {},
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "align",
  "alt",
  "width",
  "height",
  "style",
  "size",
];
