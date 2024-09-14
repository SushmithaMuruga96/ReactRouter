import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {
  const navStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const auth = useAuth();

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
      <NavLink style={navStyles} to="/profile">
        Profile
      </NavLink>

      {!auth.user && (
        <NavLink style={navStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};
