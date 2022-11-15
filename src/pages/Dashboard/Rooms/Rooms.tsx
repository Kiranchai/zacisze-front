import AddButton from "../../../components/AddButton/AddButton";
import DashListItem from "../../../components/DashListItem/DashListItem";
import EditRoomModal from "../../../components/EditRoomModal/EditRoomModal";
import "./Rooms.css";
import { useState } from "react";

const Rooms = () => {
  const [modalShown, setModalShown] = useState(false);

  const displayModal = () => {
    setModalShown((prevState) => !prevState);
  };

  return (
    <main className="dashboard-rooms-main">
      <h1 className="dashboard-rooms-header">Pokoje</h1>

      <AddButton handleOnClick={displayModal} />

      <EditRoomModal shown={modalShown} setShown={setModalShown} />
      <section>
        <ul className="dashboard-rooms-list">
          <DashListItem
            roomName="Victoria"
            roomDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <DashListItem
            roomName="Bravo"
            roomDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <DashListItem
            roomName="Alfa"
            roomDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />

          <DashListItem
            roomName="Beta"
            roomDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </ul>
      </section>
    </main>
  );
};

export default Rooms;
