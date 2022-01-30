import React from "react";
import {Link, Outlet} from "react-router-dom"
import Logo from "./logo.png";
import "./Header.css";
const Header = () => {
  return (
    <>
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <nav>
        <Link to="/day" className="nav__link nav__link--day">
          Day
        </Link>
        <Link to="/week" className="nav__link nav__link--week">
          Week
        </Link>
      </nav>
    </header>
    <Outlet/>
    </>
  );
};

export default Header;
