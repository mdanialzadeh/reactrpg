import React from "react";
import { useRecoilValue } from "recoil";
import golemAtk from "./rockIdle.png";
import { actionState, KnightStats } from "../../../atoms.js";
import Lifebar from "../../../Lifebar";
import Animation from "../../Animation";

function Rock() {
  const Knight = {
    maxHP: "100",
    currentHP: "50",
  };

  const action = useRecoilValue(actionState);
  return (
    <div className={action === "Idle" ? "mobContainer" : "mobContainerActive"}>
      <Lifebar current={Knight.currentHP} max={Knight.maxHP} />
      <Animation animation={golemAtk} />
    </div>
  );
}

export default Rock;
