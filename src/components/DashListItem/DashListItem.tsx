import "./DashListItem.css";
import { AiFillEdit } from "react-icons/ai";
import DashListProps from "./DashListProps";

const DashListItem = ({ roomName, roomDesc }: DashListProps) => {
  return (
    <li className="dashboard-rooms-list-item">
      <div className="rooms-list-left">
        <h3>{roomName}</h3>
        <span className="dashboard-rooms-description">{roomDesc}</span>
      </div>
      <div className="room-list-right">
        <AiFillEdit className="edit-icon" />
      </div>
    </li>
  );
};

export default DashListItem;
