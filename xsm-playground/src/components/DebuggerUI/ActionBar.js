/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";

function ActionBar({ handleStart }) {
  return (
    <div className="xsm-action-bar">
      <a
        href="javascript:void(0)"
        className="xsm-action-bar__button xsm-action-bar__button--step"
      >
        Step
      </a>
      <a
        href="javascript:void(0)"
        className="xsm-action-bar__button xsm-action-bar__button--continue"
      >
        Continue
      </a>
      <a
        href="javascript:void(0)"
        className="xsm-action-bar__icon xsm-action-bar__icon--restart"
      >
        <RestartAltIcon color="success" />
      </a>
      <a
        href="javascript:void(0)"
        className="xsm-action-bar__icon xsm-action-bar__icon--stop"
      >
        <StopCircleOutlinedIcon color="warning" />
      </a>
      <a
        href="javascript:void(0)"
        className="xsm-action-bar__button xsm-action-bar__button--start"
        onClick={handleStart}
      >
        Start
      </a>
    </div>
  );
}

export default ActionBar;
