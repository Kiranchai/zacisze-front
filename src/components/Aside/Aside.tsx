import { Outlet } from "react-router-dom";
import "./Aside.css";
import { AiOutlineMenu } from "react-icons/ai";
import {
  MdSpaceDashboard,
  MdMeetingRoom,
  MdBookmark,
  MdLocalPostOffice,
} from "react-icons/md";
import Option from "./Option/Option";
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
              <Option
                optionName="Panel główny"
                optionIcon={<MdSpaceDashboard />}
                routerPath="/"
                onClick={showAside}
              />

              <Option
                optionName="Pokoje"
                optionIcon={<MdMeetingRoom />}
                routerPath="/rooms"
                onClick={showAside}
              />

              <Option
                optionName="Rezerwacje"
                optionIcon={<MdBookmark />}
                routerPath="/reservations"
                onClick={showAside}
              />

              <Option
                optionName="Aktualności"
                optionIcon={<MdLocalPostOffice />}
                routerPath="/news"
                onClick={showAside}
              />
            </ul>
          </nav>
        </aside>
        <div className="aside-separator"></div>

        <div className={asideShown ? "outlet blurred" : "outlet"}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Aside;
