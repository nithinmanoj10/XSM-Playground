/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import xsmLogo from "../../images/xsm-playground-logo.svg";

function NavBar() {
  return (
    <div className="xsm-nav-bar">
      <div className="xsm-nav-bar__logo">
        <a href="javascript:void(0)">
          <img
            className="xsm-nav-bar__logo--image"
            src={xsmLogo}
            alt="XSM Playgorund Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
