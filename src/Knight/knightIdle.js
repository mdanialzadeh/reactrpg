import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import idleAnimation from "./KnightIdle.png";

function knightIdle() {
  return (
    <Spritesheet
      autoplay={true}
      image={idleAnimation}
      widthFrame={90}
      heightFrame={60}
      steps={4}
      fps={4}
      loop={true}
      onInit={(spritesheet) => {
        spritesheet.goToAndPlay(1);
      }}
    />
  );
}

export default knightIdle;
