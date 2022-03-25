import React from "react";
import atkAnimation from "./knightAtkAnimation.png";
import blockAnimation from "./knightBlockAnimation.png";
import idleAnimation from "./KnightIdle.png";
import skillAnimation from "./knightSkillAnimation.png";
import Animation from "../../Animation";
import { useRecoilValue } from "recoil";
import { actionState, KnightStats } from "../../../atoms";
import Lifebar from "../../../Lifebar";

function Knight() {
  const action = useRecoilValue(actionState);
  const stats = useRecoilValue(KnightStats);

  return (
    <div
      className={action === "Idle" ? "charContainer" : "charContainerActive"}
      key={action}
    >
      <Lifebar current={stats.currentHP} max={stats.maxHP} />
      {action === "Idle" ? (
        <Animation animation={idleAnimation} />
      ) : (
        {
          Attack: <Animation animation={atkAnimation} />,
          Block: <Animation animation={blockAnimation} />,
          Skill: <Animation animation={skillAnimation} />,
        }[action]
      )}
    </div>
  );
}

export default Knight;
