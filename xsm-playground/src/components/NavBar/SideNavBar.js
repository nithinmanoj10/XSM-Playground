/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

function SideNavBar() {
  return (
    <div className="xsm-side-nav-bar">
      <a
        href="javascript:void(0)"
        className="xsm-side-nav-bar__icon xsm-side-nav-bar__icon--register"
        alt="Side nav-bar registers icon"
        title="Show Registers"
      >
        <Inventory2OutlinedIcon />
      </a>
      <a
        href="javascript:void(0)"
        className="xsm-side-nav-bar__icon xsm-side-nav-bar__icon--stack"
        alt="Side nav-bar stack icon"
        title="Show Stack"
      >
        <TableRowsOutlinedIcon />
      </a>
      <a
        href="javascript:void(0)"
        className="xsm-side-nav-bar__icon xsm-side-nav-bar__icon--heap"
        alt="Side nav-bar heap icon"
        title="Show Heap"
      >
        <AccountTreeOutlinedIcon />
      </a>
    </div>
  );
}

export default SideNavBar;
