import React from "react";
import "../src/App.css";
import { BsImage } from "react-icons/bs";
import memesData from "./memesData";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");
  const handleClick = () => {
    const memesArray = memesData.data.memes;
    const random = memesArray[Math.floor(Math.random() * memesArray.length)];
    setMemeImage(random.url);
    // console.log(memeImage);
  };
  return (
    <main>
      <div className="inputForm">
        <input
          type="text"
          id="meme1"
          name="meme1"
          placeholder="First Meme"
          className="form1"
        />
        <input
          type="text"
          id="meme2"
          name="meme2"
          placeholder="Second Meme"
          className="form1"
        />
        <span className="d">
          <button
            type="text"
            id="memeBtn"
            name="memeBtn"
            placeholder="Generate New Meme"
            className="memeBtn"
            onClick={handleClick}
          >
            Generate New Meme <BsImage className="btnimage" />
          </button>
          <img src={memeImage} className="daMeme" />
        </span>
      </div>
    </main>
  );
};

export default Meme;
