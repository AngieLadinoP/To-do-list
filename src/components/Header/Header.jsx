import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <h1 className="header__title"> Lista de tareas</h1>
      <nav className="navigation">
        <Link to="/" className="navigation__link navigation__link--day">
          Tareas
        </Link>
        <Link
          to="/category"
          className="navigation__link navigation__link--category"
        >
          Categorías
        </Link>
      </nav>
    </header>
  );
};

export default Header;
