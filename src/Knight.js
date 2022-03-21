import React, { useEffect, useState } from "react";
import Spritesheet from "react-responsive-spritesheet";
import KnightIdle from "./Assets/Knight/KnightIdle.png";
import KnightAtk from "./knightAtk.js";
import KnightSkill from "./knightSkill.js";
import KnightBlock from "./knightBlock.js";
import { useRecoilValue } from "recoil";
import { actionState } from "./atoms.js";

function Knight() {
  const action = useRecoilValue(actionState);

  return (
    <div className="charContainer">
      {
        {
          Idle: (
            <Spritesheet
              autoplay={true}
              image={KnightIdle}
              widthFrame={90}
              heightFrame={60}
              steps={4}
              fps={4}
              loop={true}
              isResponsive={true}
            />
          ),

          Attack: <KnightAtk />,
          Block: <KnightBlock />,
          Skill: <KnightSkill />,
        }[action]
      }
    </div>
  );
}

export default Knight;
