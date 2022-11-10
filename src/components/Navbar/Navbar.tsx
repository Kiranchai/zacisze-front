import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const handleOnToggle = () => {
    setIconIsActive((prevState) => !prevState);
  };

  const [iconIsActive, setIconIsActive] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <span>
            <NavLink className="logo-link" to="/">
              LOGO
            </NavLink>
          </span>

          <span className="hamburger-span">
            <Hamburger onToggle={handleOnToggle} />
          </span>
        </div>

        {/* <div className="navbar-right"> */}
        <ul className={iconIsActive ? "navbar-list showed" : "navbar-list"}>
          <li>
            <NavLink className="navbar-link" to="/about">
              O nas
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/news">
              Aktualności
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
        {/* </div> */}
      </nav>
      <div className="navbar-separator"></div>
    </>
  );
};

export default Navbar;
