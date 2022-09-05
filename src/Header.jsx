import React from "react";
import meme from "../public/Troll-Face.png";
import "../src/App.css";

const Header = () => {
  return (
    <nav className="nav">
      {" "}
      <img src={meme} className="troll" width="45px" height="38px" />
      <h1 className="headerTitle">Meme Generator</h1>
      <h4 className="reactCourse">React Course - Project 4</h4>
    </nav>
  );
};

export default Header;
