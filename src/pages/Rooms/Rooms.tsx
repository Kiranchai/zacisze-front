import { NavLink } from "react-router-dom";

const Rooms = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/rooms/1">Room 1</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
