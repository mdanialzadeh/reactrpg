import React, { useEffect } from "react";

import Knight from "./Assets/Classes/Knight/Knight.js";
import Wizard from "./Assets/Classes/Wizard/Wizard.js";
import Stats from "./Stats";
import { classType, activeScreen } from "./atoms";
import { useRecoilValue, useRecoilState } from "recoil";
import MovingBackground from "./MovingBackground";

function CharTravel() {
  const currentClass = useRecoilValue(classType);
  const [currentscreen, setcurrentScreen] = useRecoilState(activeScreen);

  useEffect(() => {
    setTimeout(() => {
      setcurrentScreen("runGame");
    }, 2000);
  }, [setcurrentScreen]);

  return (
    <div className="game-container">
      <MovingBackground />

      <div className="game-canvas">
        <div className="user-canvas">
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
