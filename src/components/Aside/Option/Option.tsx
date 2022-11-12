import { NavLink } from "react-router-dom";
import OptionProps from "./OptionProps";
import "./Option.css";

const Option = ({
  optionName,
  optionIcon,
  routerPath,
  onClick,
}: OptionProps) => {
  return (
    <NavLink
      className="aside-navlink"
      to={`/dashboard${routerPath}`}
      onClick={onClick}
    >
      <li className="aside-option-link">
        {optionIcon}

        <span>{optionName}</span>
      </li>
    </NavLink>
  );
};

export default Option;
