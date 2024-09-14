import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink style={navStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navStyles} to="/about">
        About
      </NavLink>

      <NavLink style={navStyles} to="/products">
        Products
      </NavLink>
      <NavLink style={navStyles} to="/users">
        User
      </NavLink>
    </nav>
  );
};
