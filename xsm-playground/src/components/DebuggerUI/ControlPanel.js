import React from "react";

import RegisterPanel from "../Registers/RegisterPanel";

function ControlPanel() {
  return (
    <div className="xsm-control-panel">
      <div className="xsm-control-panel__registers">
        <RegisterPanel registerType="General Registers" />
        <RegisterPanel registerType="Special Registers" />
        <RegisterPanel registerType="Instruction Pointer" />
      </div>
      <div className="xsm-control-panel__side-nav">Side NavBar</div>
      <div className="xsm-control-panel__debug-controls"></div>
    </div>
  );
}

export default ControlPanel;
