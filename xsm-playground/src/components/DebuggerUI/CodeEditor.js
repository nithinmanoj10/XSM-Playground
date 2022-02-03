import React from "react";

import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";

function CodeEditor() {
  return (
    <div className="xsm-code-editor">
      <CodeMirror theme={oneDark} height="100%" />
    </div>
  );
}

export default CodeEditor;
