import React from "react";
import Logo from "./logo.png";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <h1 className="header__title"> Lista de tareas</h1>
    </header>
  );
};

export default Header;
