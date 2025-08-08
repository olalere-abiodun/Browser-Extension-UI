import React from "react";
import ReactDOM from "react-dom";

function Header(props) {
  return (
    <header className="header">
      <img src={props.logo} alt="Logo" class="logo" />

      <button className="icon-button" onClick={props.onThemeToggle}>
        <img src={props.themeIcon} alt="sunset" />
      </button>
    </header>
  );
}

export default Header;
