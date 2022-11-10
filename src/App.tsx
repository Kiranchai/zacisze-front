import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

const App = ({ Children }: { Children: React.FC }) => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Children />
      </div>
    </>
  );
};

export default App;
