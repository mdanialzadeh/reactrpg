import React from "react";
import atkAnimation from "./knightAtkAnimation.png";
import blockAnimation from "./knightBlockAnimation.png";
import runAnimation from "./knightRun.png";
import idleAnimation from "./KnightIdle.png";
import skillAnimation from "./knightSkillAnimation.png";
import Animation from "../../Animation";
import { useRecoilValue } from "recoil";
import { animationStateUser, KnightStats } from "../../../atoms";
import Lifebar from "../../../Lifebar";

function Knight() {
  const animation = useRecoilValue(animationStateUser);
  const stats = useRecoilValue(KnightStats);

  return (
    <div
      className={animation === "Idle" ? "charContainer" : "charContainerActive"}
      key={animation}
    >
      <Lifebar current={stats.currentHP} max={stats.maxHP} />
      {animation === "Idle" ? (
        <Animation
          animation={idleAnimation}
          steps={4}
          direction={"forward"}
          fps={4}
          loop={true}
        />
      ) : (
        {
          Attack: (
            <Animation
              animation={atkAnimation}
              steps={4}
              direction={"forward"}
              fps={4}
            />
          ),
          Run: (
            <Animation
              animation={runAnimation}
              steps={4}
              direction={"forward"}
              fps={4}
            />
          ),
          Block: (
            <Animation
              animation={blockAnimation}
              steps={4}
              direction={"forward"}
              fps={4}
            />
          ),
          Skill: (
            <Animation
              animation={skillAnimation}
              steps={4}
              direction={"forward"}
              fps={4}
            />
          ),
        }[animation]
      )}
    </div>
  );
}

export default Knight;
