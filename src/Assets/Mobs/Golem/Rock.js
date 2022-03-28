import React from "react";
import { useRecoilValue } from "recoil";
import idleAnimation from "./golemIdle.png";
import atkAnimation from "./golemAtk.png";
import blockAnimation from "./golemblock.png";
import skillAnimation from "./golemSkill.png";
import { animationStateComp, KnightStats } from "../../../atoms.js";
import Lifebar from "../../../Lifebar";
import Animation from "../../Animation";

function Rock() {
  const animation = useRecoilValue(animationStateComp);
  return (
    <div
      className={animation === "Idle" ? "mobContainer" : "mobContainerActive"}
      key={animation}
    >
      <Lifebar current={50} max={100} />
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
