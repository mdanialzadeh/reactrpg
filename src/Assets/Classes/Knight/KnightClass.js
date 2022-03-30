import React from "react";
import Animation from "../../Animation";
import idleAnimation from "./KnightIdle.png";

function KnightClass() {
  const startingStats = {
    class: "Knight",
    maxHP: "100",
    currentHP: "100",
    AttackDMG: "6",
    skillDMG: "2",
    Defense: "8",
  };

  const Animations = {
    idle: (
      <Animation
        animation={idleAnimation}
        steps={4}
        direction={"forward"}
        fps={4}
        loop={true}
      />
    ),
  };

  return <div>{Animations.idle}</div>;
}

export default KnightClass;
