import React from "react";
import { Link, NavLink } from "react-router-dom";

const navStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
    fontSize: "22px",
  };
};

function navBar() {
  return (
    <>
      <nav className="nav">
        <NavLink to={"/"} style={navStyles}>
          Home
        </NavLink>
        <NavLink to={"/About"} style={navStyles}>
          About
        </NavLink>
        <NavLink to={"/product"} style={navStyles}>
          Product
        </NavLink>
      </nav>
    </>
  );
}

export default navBar;
