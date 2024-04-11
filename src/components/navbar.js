import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"} className="logo-nav">
          {" "}
          LOGO
        </Link>
        <ul className="menu-nav">
          <li className="list">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="list">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
