import React from "react";

import NavBar from "../components/NavBar/NavBar";
import CodeEditor from "../components/DebuggerUI/CodeEditor";
import ControlPanel from "../components/DebuggerUI/ControlPanel";

function XSMHome() {
  return (
    <div className="xsm-home">
      <div className="xsm-home__nav-bar">
        <NavBar />
      </div>
      <div className="xsm-home__debug-interface">
        <CodeEditor />
        <ControlPanel />
      </div>
    </div>
  );
}

export default XSMHome;
