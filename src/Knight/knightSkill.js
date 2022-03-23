import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import skillAnimation from "./knightSkillAnimation.png";

function knightSkill() {
  return (
    <Spritesheet
      autoplay={true}
      image={skillAnimation}
      widthFrame={120}
      heightFrame={80}
      steps={4}
      fps={4}
      loop={true}
      isResponsive={true}
      onInit={(spritesheet) => {
        spritesheet.goToAndPlay(1);
      }}
    />
  );
}

export default knightSkill;
