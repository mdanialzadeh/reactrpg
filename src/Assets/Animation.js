import React, { useState, useEffect } from "react";
import Spritesheet from "react-responsive-spritesheet";

function Animation({ animation }) {
  return (
    <Spritesheet
      autoplay={true}
      image={animation}
      widthFrame={120}
      heightFrame={80}
      steps={4}
      fps={4}
      loop={true}
      onInit={(spritesheet) => {
        spritesheet.goToAndPlay(1);
      }}
    />
  );
}

export default Animation;
