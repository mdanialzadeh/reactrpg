import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import ground from "./Assets/Images/ground1.png";
import layer2 from "./Assets/Images/ground.png";
import layer3 from "./Assets/Images/layer3sprite.png";
import Animation from "./Assets/Animation";
import knightRun from "./Assets/Classes/Knight/knightRun.png";
import wizardRun from "./Assets/Classes/Wizard/wizardRun.png";
import Stats from "./Stats";
import { classType } from "./atoms";
import { useRecoilValue } from "recoil";
import Encounter from "./Encounter";

function MovingBackground() {
  return (
    <>
      <div className="travel-background" style={{ zIndex: "2" }}>
        <Spritesheet
          autoplay={true}
          image={ground}
          widthFrame={700}
          heightFrame={425}
          steps={15}
          fps={6}
          loop={true}
        />
      </div>
      <div className="travel-background" style={{ zIndex: "11" }}>
        <Spritesheet
          autoplay={true}
          image={layer2}
          widthFrame={700}
          heightFrame={425}
          steps={4}
          fps={6}
          loop={true}
        />
      </div>
      <div className="travel-background" style={{ zIndex: "1" }}>
        <Spritesheet
          autoplay={true}
          image={layer3}
          widthFrame={700}
          heightFrame={425}
          steps={3}
          fps={1}
          loop={true}
        />
      </div>
    </>
  );
}

export default MovingBackground;
