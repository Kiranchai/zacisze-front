import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>
          <NavLink className="navbar-link" to="/">
            LOGO
          </NavLink>
        </h1>

        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/about">
              O nas
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/news">
              Nowości
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/rooms">
              Nasze sale
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar-separator"></div>
    </>
  );
};

export default Navbar;
