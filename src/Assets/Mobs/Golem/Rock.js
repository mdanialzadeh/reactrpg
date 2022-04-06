import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import idleAnimation from "./golemIdle.png";
import atkAnimation from "./golemAtk.png";
import blockAnimation from "./golemblock.png";
import skillAnimation from "./golemSkill.png";
import { animationStateComp, enemyStats } from "../../../atoms.js";
import Lifebar from "../../../Lifebar";
import Animation from "../../Animation";

function Rock() {
  const animation = useRecoilValue(animationStateComp);
  const [currentEnemyStats, setCurrentEnemyStats] = useRecoilState(enemyStats);

  useEffect(() => {
    setCurrentEnemyStats({
      name: "Golem",
      maxHP: 60,
      currentHP: 60,
      AttackDMG: 5,
      skillDMG: 6,
      Defense: 2,
      shield: 2,
    });
  }, []);

  return (
    <div
      className={animation === "Idle" ? "mobContainer" : "mobContainerActive"}
      key={animation}
    >
      <Lifebar
        current={currentEnemyStats.currentHP}
        max={currentEnemyStats.maxHP}
      />
      {animation === "Idle" ? (
        <Animation
          animation={idleAnimation}
          steps={4}
          direction={"rewind"}
          fps={4}
          loop={true}
        />
      ) : (
        {
          Attack: (
            <Animation
              animation={atkAnimation}
              steps={10}
              direction={"rewind"}
              fps={10}
            />
          ),
          Block: (
            <Animation
              animation={blockAnimation}
              steps={11}
              direction={"rewind"}
              fps={11}
            />
          ),
          Skill: (
            <Animation
              animation={skillAnimation}
              steps={11}
              direction={"rewind"}
              fps={11}
            />
          ),
        }[animation]
      )}
    </div>
  );
}

export default Rock;
