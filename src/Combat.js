import React from "react";
import Stats from "./Stats";
import Knight from "./Assets/Classes/Knight/Knight.js";
import Wizard from "./Assets/Classes/Wizard/Wizard.js";
import Golem from "./Assets/Mobs/Golem/Rock.js";
import { classType } from "./atoms";
import { useRecoilValue } from "recoil";
import { KnightStats, enemyStats } from "./atoms.js";

function Combat() {
  const currentClass = useRecoilValue(classType);
  const userstats = useRecoilValue(KnightStats);
  const enemystats = useRecoilValue(enemyStats);
  return (
    <>
      <div className="game-container">
        <div className="game-canvas">
          <div className="user-canvas">
            <Stats stats={userstats} />
            {
              {
                Knight: <Knight />,
                Wizard: <Wizard />,
              }[currentClass]
            }
          </div>
          <div className="enemy-canvas">
            <Stats stats={enemystats} />
            <Golem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Combat;
