import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "./Header.scss";

function Header() {
  const moveHomePage = () => {
    window.open("https://kore.ai/");
  };
  return (
    <div className="logo-title">
      <span className="left-title"></span>
      <span className="center-title">
        <img
          src="img/kore_logo.png"
          width="330px"
          height="45px"
          alt="kore.ai Logo svg file"
        ></img>
      </span>
      <span className="right-title" onClick={moveHomePage}>
        <FiExternalLink />
      </span>
    </div>
  );
}

export default Header;
