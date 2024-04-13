import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";
// import { NavbarBrand } from "react-bootstrap";
// import logo from "./logo192.png";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark">
        <NavbarBrand as={Link} to={"/"}>
          <img
            src={logo}
            height="30"
            width="30"
            alt="logo"
            className="d-inline-block align-top"
          />
        </NavbarBrand>

        <Link to={"/"} className="logo-nav">
          {" "}
          LOGO
        </Link>
        <div className="ms-auto">
          <ul className="menu-nav ms-auto">
            <li className="list">
              <Link to="/">Home</Link>
            </li>
            <li className="list">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="list">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <Link to={"/"} className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a> */}
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#">
                  Features
                </a> */}
                <Link to={"/menu"} className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                {/* <a class="nav-link" href="#">
                  Pricing
                </a> */}
                <Link to={"/contacts"} className="nav-link">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
