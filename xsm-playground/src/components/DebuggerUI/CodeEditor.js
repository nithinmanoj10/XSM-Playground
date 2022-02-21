import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";

import InstructionInfo from "./InstructionInfo";

function CodeEditor({ handleXSMCode }) {
  return (
    <div className="xsm-code-editor">
      <CodeMirror
        theme={oneDark}
        height="100%"
        onChange={(value) => {
          handleXSMCode(value);
        }}
      />
      <InstructionInfo />
    </div>
  );
}

export default CodeEditor;
