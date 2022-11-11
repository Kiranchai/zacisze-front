import React from "react";
import "./Rooms.css";
import { AiFillEdit } from "react-icons/ai";

const Rooms = () => {
  return (
    <main className="dashboard-rooms-main">
      <h1 className="dashboard-rooms-header">Pokoje</h1>

      <section>
        <ul className="dashboard-rooms-list">
          <li className="dashboard-rooms-list-item">
            <div className="rooms-list-left">
              <h3>Victoria</h3>
              <span className="dashboard-rooms-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, perferendis.
              </span>
            </div>
            <div className="room-list-right">
              <AiFillEdit />
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Rooms;
