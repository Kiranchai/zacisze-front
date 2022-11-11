import { NavLink, Outlet } from "react-router-dom";
import "./Aside.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Aside = () => {
  const [asideShown, setAsideShown] = useState(false);

  const showAside = () => {
    setAsideShown((prevState) => !prevState);
  };

  return (
    <>
      <nav className="aside-nav">
        <div className="hamburger-wrapper">
          <AiOutlineMenu className="hamburger-icon" onClick={showAside} />
        </div>
      </nav>
      <div className="aside-nav-separator" />

      <div style={{ display: "flex" }}>
        <aside
          className={asideShown ? "aside-container shown" : "aside-container"}
        >
          <nav>
            <header className="aside-welcome-header">
              Zalogowano jako Karol
            </header>
            <ul className="aside-option-list">
              <NavLink
                className="aside-navlink"
                to="/dashboard/"
                onClick={showAside}
              >
                <li className="aside-option-link">Panel główny</li>
              </NavLink>

              <NavLink
                className="aside-navlink"
                to="/dashboard/rooms"
                onClick={showAside}
              >
                <li className="aside-option-link">Pokoje</li>
              </NavLink>

              <NavLink
                className="aside-navlink"
                to="/dashboard/reservations"
                onClick={showAside}
              >
                <li className="aside-option-link">Rezerwacje</li>
              </NavLink>

              <NavLink
                className="aside-navlink"
                to="/dashboard/news"
                onClick={showAside}
              >
                <li className="aside-option-link">Aktualności</li>
              </NavLink>
            </ul>
          </nav>
        </aside>
        <div className="aside-separator"></div>

        <Outlet />
      </div>
    </>
  );
};

export default Aside;
