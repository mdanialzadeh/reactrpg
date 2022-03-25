import React, { useState, useEffect } from "react";
import Spritesheet from "react-responsive-spritesheet";

function Animation({ animation, steps, direction, fps, loop }) {
  return (
    <Spritesheet
      autoplay={true}
      image={animation}
      widthFrame={120}
      heightFrame={80}
      steps={steps}
      fps={fps}
      direction={direction}
      loop={loop}
    />
  );
}

export default Animation;
