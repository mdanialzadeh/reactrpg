import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import KnightIdle from "./Assets/Knight/KnightIdle.png";
import KnightAtk from "./Assets/Knight/KnightAtk.png";
import KnightSkill from "./Assets/Knight/KnightSkill.png";
import KnightBlock from "./Assets/Knight/KnightBlock.png";

function Knight() {
  return (
    <div className="charContainer">
      <Spritesheet
        autoplay={true}
        image={KnightAtk}
        widthFrame={90}
        heightFrame={60}
        steps={4}
        fps={5}
        loop={true}
      />
    </div>
  );
}

export default Knight;
