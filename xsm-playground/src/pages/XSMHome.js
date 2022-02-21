import React, { useState } from "react";
import createParseTree from "../Parser/CreateParseTree";

import NavBar from "../components/NavBar/NavBar";
import CodeEditor from "../components/DebuggerUI/CodeEditor";
import ControlPanel from "../components/DebuggerUI/ControlPanel";

function XSMHome() {
  const [xsmInstructions, setXsmInstructions] = useState(""); // XSM Instruction that is entered by the user through the code editor

  // sets xsmInstruction value each time the user
  // enters code into the code editor
  function handleXSMCode(xsmCode) {
    setXsmInstructions(xsmCode);
  }

  // on-clicking the start button by the user,
  // create the parse tree
  function handleStart() {
    console.log(xsmInstructions);
    createParseTree(xsmInstructions);
  }

  return (
    <div className="xsm-home">
      <div className="xsm-home__nav-bar">
        <NavBar />
      </div>
      <div className="xsm-home__debug-interface">
        <CodeEditor handleXSMCode={handleXSMCode} />
        <ControlPanel handleStart={handleStart} />
      </div>
    </div>
  );
}

export default XSMHome;
