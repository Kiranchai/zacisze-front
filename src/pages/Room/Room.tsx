import { NavLink } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import "./Room.css";

const Room = () => {
  return (
    <section className="room-container">
      <h2 className="room-name-header">Pokój Victoria</h2>

      <div className="room-content">
        <Slider />
      </div>

      <article className="room-description-article">
        <header className="room-description-header">SZCZEGÓŁY</header>
        <ul className="room-description-list">
          <li className="room-description-link">Przestrzeń: 24m^2</li>
          <li className="room-description-link">Miejsca: 10</li>
          <li className="room-description-link">Stoły: 2</li>
          <li className="room-description-link">Gniazdka: 4</li>
          <li className="room-description-link">Projektory: 2</li>
        </ul>
      </article>

      <NavLink to="/" className="book-now-btn">
        ZAREZERWUJ TERAZ
      </NavLink>
    </section>
  );
};

export default Room;
