import React from "react";
import { Link, Outlet } from "react-router-dom";

//outlet component render the child nested routes matches the parent in the DOM
export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="feature"> Feature</Link>
        <Link to="new"> New</Link>
      </nav>
      <Outlet />
    </>
  );
};
