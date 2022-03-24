import React from "react";
import KnightIdle from "./knightIdle.js";
import KnightAtk from "./knightAtk.js";
import KnightSkill from "./knightSkill.js";
import KnightBlock from "./knightBlock.js";
import { useRecoilValue } from "recoil";
import { actionState, KnightStats } from "../atoms.js";
import Lifebar from "../Lifebar";

function Knight() {
  const action = useRecoilValue(actionState);
  const stats = useRecoilValue(KnightStats);

  return (
    <div
      className={action === "Idle" ? "charContainer" : "charContainerActive"}
    >
      <Lifebar current={stats.currentHP} max={stats.maxHP} />
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
