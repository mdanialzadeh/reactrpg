import React from "react";
import atkAnimation from "./WizardAtk.png";
import blockAnimation from "./wizardBlock.png";
import idleAnimation from "./wizardIdle.png";
import skillAnimation from "./WizardSkill.png";
import Animation from "../../Animation";
import { useRecoilValue } from "recoil";
import { animationStateUser, userStats } from "../../../atoms";
import Lifebar from "../../../Lifebar";

function Wizard() {
  const animation = useRecoilValue(animationStateUser);
  const stats = useRecoilValue(userStats);

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

export default Wizard;
