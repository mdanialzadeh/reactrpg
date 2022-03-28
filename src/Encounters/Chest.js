import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import chest from "./Assets/Images/chest.png";

function Chest() {
  return (
    <div className="enemy-canvas">
      <div className="mobContainer">
        <Spritesheet
          image={chest}
          loop={true}
          fps={4}
          steps={4}
          widthFrame={135}
          heightFrame={96}
        />
      </div>
    </div>
  );
}

export default Chest;
