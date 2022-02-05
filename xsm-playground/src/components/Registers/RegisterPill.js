import React from "react";

function RegisterPill({ regName, regVal }) {
  return (
    <div className="xsm-register-pill">
      <div className="xsm-register-pill__name">{regName}</div>
      <div className="xsm-register-pill__value">{regVal}</div>
    </div>
  );
}

export default RegisterPill;
