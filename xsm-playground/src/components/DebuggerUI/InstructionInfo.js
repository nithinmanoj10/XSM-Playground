import React from "react";

import InstructionPill from "./InstructionPill";

function InstructionInfo() {
  return (
    <div className="xsm-instruction-info">
      <InstructionPill pillName="Current Instruction" />
      <InstructionPill pillName="Next Instruction" />
    </div>
  );
}

export default InstructionInfo;
