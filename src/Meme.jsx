import React from "react";
import "../src/App.css";
import { BsImage } from "react-icons/bs";

import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    // console.log(memeImage);
  };

  const handleChange = () => {
    const { name, value } = event.target;
    setMemeImage((prevImage) => ({
      ...prevImage,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="inputForm">
        <input
          type="text"
          id="meme1"
          name="topText"
          placeholder="First Meme"
          className="form--input"
          value={memeImage.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          id="meme2"
          name="bottomText"
          placeholder="Second Meme"
          className="form--input"
          value={memeImage.bottomText}
          onChange={handleChange}
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
          <img src={""} className="daMeme" />
        </span>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
