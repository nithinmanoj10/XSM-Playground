import React, { useState } from "react";

import RegisterPill from "./RegisterPill";

const generalRegisters = [
  { regName: "R0", regVal: "-" },
  { regName: "R1", regVal: "-" },
  { regName: "R2", regVal: "45" },
  { regName: "R3", regVal: "-" },
  { regName: "R4", regVal: "-" },
  { regName: "R5", regVal: "-" },
  { regName: "R6", regVal: "-" },
  { regName: "R7", regVal: "-" },
  { regName: "R8", regVal: "-" },
  { regName: "R9", regVal: "-" },
  { regName: "R10", regVal: "-" },
  { regName: "R11", regVal: "-" },
  { regName: "R12", regVal: "45" },
  { regName: "R13", regVal: "-" },
  { regName: "R14", regVal: "-" },
  { regName: "R15", regVal: "-" },
  { regName: "R16", regVal: "-" },
  { regName: "R17", regVal: "-" },
  { regName: "R18", regVal: "-" },
  { regName: "R19", regVal: "-" },
];

const specialRegister = [
  { regName: "SP", regVal: "4095" },
  { regName: "BP", regVal: "4096" },
];

const instructionPointer = [{ regName: "IP", regVal: "2048" }];

function RegisterPanel(props) {
  const [registerType, setRegisterType] = useState(props.registerType);

  const registerPillList = [];

  if (registerType === "General Registers") {
    generalRegisters.forEach((reg) => {
      registerPillList.push(
        <RegisterPill regName={reg.regName} regVal={reg.regVal} />
      );
    });
  }

  if (registerType === "Special Registers") {
    specialRegister.forEach((reg) => {
      registerPillList.push(
        <RegisterPill regName={reg.regName} regVal={reg.regVal} />
      );
    });
  }

  if (registerType === "Instruction Pointer") {
    instructionPointer.forEach((reg) => {
      registerPillList.push(
        <RegisterPill regName={reg.regName} regVal={reg.regVal} />
      );
    });
  }

  return (
    <div className="xsm-register-panel">
      <h3 className="xsm-register-panel__name">{registerType}</h3>
      <div className="xsm-register-panel__box">{registerPillList}</div>
    </div>
  );
}

export default RegisterPanel;
