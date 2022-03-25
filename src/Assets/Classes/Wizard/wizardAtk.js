import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import KnightAtk from "./knightAtkAnimation.png";

function WizardAtk() {
  return (
    <Spritesheet
      autoplay={true}
      image={KnightAtk}
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

export default WizardAtk;
