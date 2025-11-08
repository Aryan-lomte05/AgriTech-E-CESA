import React from "react";
import Lottie from "lottie-react";
import ChickenAnimation from "../assets/chicken.json"; // Import the Lottie JSON
import ChickenSound from "../assets/chicken-scream-1.ogg"; // Import the chicken sound
import "./Chicken.css"; 

const Chicken = () => {
  const playSound = () => {
    const audio = new Audio(ChickenSound);
    audio.play();
  };

  return (
    <>
      <div className="chicken-container">
        <Lottie
          animationData={ChickenAnimation}
          loop={true}
          className="chicken"
          onClick={playSound} 
        />
      </div>
      <div className="chicken-container">
        <Lottie
          animationData={ChickenAnimation}
          loop={true}
          className="chicken"
          onClick={playSound} 
        />
      </div>
    </>
  );
};

export default Chicken;
