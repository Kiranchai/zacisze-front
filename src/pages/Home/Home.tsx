import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-info">
        <div>
          <h1 className="home-header">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <span className="home-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          </span>
        </div>

        <button className="home-learn-more">Dowiedz się więcej</button>
      </div>
    </section>
  );
};

export default Home;
