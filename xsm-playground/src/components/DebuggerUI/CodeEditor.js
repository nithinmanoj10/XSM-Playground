import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";

import InstructionInfo from "./InstructionInfo";

function CodeEditor() {
  return (
    <div className="xsm-code-editor">
      <CodeMirror theme={oneDark} height="100%" />
      <InstructionInfo />
    </div>
  );
}

export default CodeEditor;
