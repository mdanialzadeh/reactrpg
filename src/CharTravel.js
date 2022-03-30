import React from "react";
import Spritesheet from "react-responsive-spritesheet";
import ground from "./Assets/Images/ground1.png";
import layer2 from "./Assets/Images/ground.png";
import layer3 from "./Assets/Images/layer3sprite.png";

import Knight from "./Assets/Classes/Knight/Knight.js";
import Wizard from "./Assets/Classes/Wizard/Wizard.js";
import Stats from "./Stats";
import { classType } from "./atoms";
import { useRecoilValue } from "recoil";
import Encounter from "./Encounter";
import MovingBackground from "./MovingBackground";

function CharTravel() {
  const currentClass = useRecoilValue(classType);

  return (
    <div className="game-container">
      <MovingBackground />

      <div className="game-canvas">
        <div className="user-canvas">
          <Stats />
          <div className="charContainer">
            {
              {
                Knight: <Knight />,
                Wizard: <Wizard />,
              }[currentClass]
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharTravel;
