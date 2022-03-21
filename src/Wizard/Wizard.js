import React, { useEffect, useState } from "react";
import Spritesheet from "react-responsive-spritesheet";
import Idle from "./WizardIdle.png";
import Atk from "./knightAtk.js";
import Skill from "./knightSkill.js";
import Block from "./knightBlock.js";
import { useRecoilValue } from "recoil";
import { actionState } from "../atoms.js";

function Wizard() {
  const action = useRecoilValue(actionState);

  return (
    <div className="charContainer">
      {
        {
          Idle: (
            <Spritesheet
              autoplay={true}
              image={Idle}
              widthFrame={90}
              heightFrame={60}
              steps={4}
              fps={4}
              loop={true}
              isResponsive={true}
            />
          ),

          Attack: <Atk />,
          Block: <Block />,
          Skill: <Skill />,
        }[action]
      }
    </div>
  );
}

export default Wizard;
