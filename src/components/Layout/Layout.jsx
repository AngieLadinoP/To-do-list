import React from "react";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header title="Lista de tareas" />
      <section className="section-shown">
        <h1>Planea tus obligaciones</h1>
        <Outlet />
        {/* Placeholder for the component that will be render depending on the route */}
      </section>
    </div>
  );
};

export default Layout;
