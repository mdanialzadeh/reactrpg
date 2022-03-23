import React, { useEffect, useState } from "react";
import Spritesheet from "react-responsive-spritesheet";
import KnightIdle from "./knightIdle.js";
import KnightAtk from "./knightAtk.js";
import KnightSkill from "./knightSkill.js";
import KnightBlock from "./knightBlock.js";
import { useRecoilValue } from "recoil";
import { actionState } from "../atoms.js";
import Lifebar from "../Lifebar";

function Knight() {
  const action = useRecoilValue(actionState);

  const Knight = {
    maxHP: "100",
    currentHP: "50",
  };
  return (
    <div className="charContainer">
      <Lifebar current={Knight.currentHP} max={Knight.maxHP} />
      {
        {
          Idle: <KnightIdle />,
          Attack: <KnightAtk />,
          Block: <KnightBlock />,
          Skill: <KnightSkill />,
        }[action]
      }
    </div>
  );
}

export default Knight;
