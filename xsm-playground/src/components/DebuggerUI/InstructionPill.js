import React, { useState } from "react";

function InstructionPill(props) {
  const [pillName, setPillName] = useState(props.pillName);

  return (
    <div className="xsm-instruction-info__pill">
      <p className="xsm-instruction-info__pill__name">{pillName}</p>
      <div className="xsm-instruction-info__pill__info">
        <div className="instruction-number">12</div>
        <div className="instruction-value">MOV R0, R2</div>
      </div>
    </div>
  );
}

export default InstructionPill;
