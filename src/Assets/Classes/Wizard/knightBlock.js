import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import blockAnimation from "./knightBlockAnimation.png";

function knightBlock() {
  return (
    <Spritesheet
      autoplay={true}
      image={blockAnimation}
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

export default knightBlock;
