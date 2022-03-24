import React from "react";
import { useRecoilValue } from "recoil";
import Spritesheet from "react-responsive-spritesheet";
import golemAtk from "./rockIdle.png";
import { actionState, KnightStats } from "../atoms.js";
import Lifebar from "../Lifebar";
function Rock() {
  const Knight = {
    maxHP: "100",
    currentHP: "50",
  };

  const action = useRecoilValue(actionState);
  return (
    <div className={action === "Idle" ? "mobContainer" : "mobContainerActive"}>
      <Lifebar current={Knight.currentHP} max={Knight.maxHP} />
      <Spritesheet
        autoplay={true}
        image={golemAtk}
        widthFrame={120}
        heightFrame={80}
        steps={4}
        fps={4}
        loop={true}
        timeout={0.2}
        direction={`forward`}
        onInit={(spritesheet) => {
          spritesheet.goToAndPlay(1);
        }}
      />
    </div>
  );
}

export default Rock;
