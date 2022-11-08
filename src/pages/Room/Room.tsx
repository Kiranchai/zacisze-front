import React from "react";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import "./Room.css";

const Room = () => {
  return (
    <section className="room-container">
      <div className="room-content">
        <div className="room-left">
          <Slider />
        </div>
        {/* <div className="room-right">
          <h1>Kałamarnica</h1>
        </div> */}
      </div>
    </section>
  );
};

export default Room;
