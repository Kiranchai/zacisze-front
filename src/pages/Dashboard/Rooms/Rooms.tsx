import DashListItem from "../../../components/DashListItem/DashListItem";
import "./Rooms.css";

const Rooms = () => {
  return (
    <main className="dashboard-rooms-main">
      <h1 className="dashboard-rooms-header">Pokoje</h1>

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
