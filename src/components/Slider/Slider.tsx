import { ReactEventHandler, useState } from "react";
import "./Slider.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    "https://images.unsplash.com/photo-1603486002664-a7319421e133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1542&q=80",
  ];

  const handleRightBtnClick = () => {
    currentImage < images.length - 1
      ? setCurrentImage((prevState) => prevState + 1)
      : setCurrentImage(0);
  };

  const handleLeftBtnClick = () => {
    currentImage > 0
      ? setCurrentImage((prevState) => prevState - 1)
      : setCurrentImage(images.length - 1);
  };

  return (
    <div className="slider-container">
      <button className="slider-btn left" onClick={handleLeftBtnClick}>
        <AiOutlineArrowLeft />
      </button>
      <button className="slider-btn right" onClick={handleRightBtnClick}>
        <AiOutlineArrowRight />
      </button>
      <img className="slider-image" src={images[currentImage]} alt="room"></img>
    </div>
  );
};

export default Slider;
