import React from "react";

import RegisterPanel from "../Registers/RegisterPanel";
import DebugControlPanel from "./DebugControlPanel";
import ActionBar from "./ActionBar";
import SideNavBar from "../NavBar/SideNavBar";

function ControlPanel({ handleStart }) {
  return (
    <div className="xsm-control-panel">
      <div className="xsm-control-panel__registers">
        <RegisterPanel registerType="General Registers" />
        <RegisterPanel registerType="Special Registers" />
        <RegisterPanel registerType="Instruction Pointer" />
      </div>
      <div className="xsm-control-panel__side-nav">
        <SideNavBar />
      </div>
      <div className="xsm-control-panel__debug-buttons">
        <ActionBar handleStart={handleStart} />
      </div>
    </div>
  );
}

export default ControlPanel;
