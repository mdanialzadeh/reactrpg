import React, { useEffect, useState } from "react";
import atkAnimation from "./knightAtkAnimation.png";
import blockAnimation from "./knightBlockAnimation.png";
import runAnimation from "./knightRun.png";
import idleAnimation from "./KnightIdle.png";
import skillAnimation from "./knightSkillAnimation.png";
import Animation from "../../Animation";
import { useRecoilValue, useRecoilState } from "recoil";
import { animationStateUser, userStats } from "../../../atoms";
import Lifebar from "../../../Lifebar";

function Knight() {
  const animation = useRecoilValue(animationStateUser);

  const [userstats, setuserstats] = useRecoilState(userStats);

  useEffect(() => {
    setuserstats({
      class: "Knight",
      maxHP: 200,
      currentHP: 200,
      AttackDMG: 10,
      skillDMG: 10,
      Defense: 4,
      shield: 2,
    });
  }, []);

  return (
    <div
      className={animation === "Idle" ? "charContainer" : "charContainerActive"}
      key={animation}
    >
      <Lifebar current={userstats.currentHP} max={userstats.maxHP} />
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
