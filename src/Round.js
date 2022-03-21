import React, { useEffect, useCallback } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { actionState, actionStateComp } from "./atoms.js";

function Round() {
  const action = useRecoilValue(actionState);
  const [ActionComp, setActionComp] = useRecoilState(actionStateComp);

  console.log(action);

  const computerplay = useCallback(() => {
    const RandomAction = Math.floor(Math.random() * 3);
    switch (RandomAction) {
      case 0:
        setActionComp("Attack");
        break;
      case 1:
        setActionComp("Block");
        break;
      case 2:
        setActionComp("Skill");
        break;
      default:
        return "Idle";
    }
  });

  useEffect(() => {
    computerplay();
  }, [action, computerplay]);

  return (
    <div>
      <>{action}</>
      <>{ActionComp}</>
    </div>
  );
}

export default Round;
