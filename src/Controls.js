import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { actionState, roundStateUser, roundStateComp } from "./atoms";

function Controls() {
  const [compAction, setCompAction] = useRecoilState(roundStateComp);
  const [action, setAction] = useRecoilState(actionState);
  const [userAction, setUserAction] = useRecoilState(roundStateUser);

  const handleChange = (event) => {
    setAction(event.target.value);
    setUserAction(event.target.value);

    const RandomAction = Math.floor(Math.random() * 3);

    switch (RandomAction) {
      case 0:
        setCompAction("Attack");
        break;
      case 1:
        setCompAction("Block");
        break;
      case 2:
        setCompAction("Skill");
        break;
      default:
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (action !== "Idle") {
        setAction("Idle");
      }
    }, 1200);
  }, [action, setAction]);

  return (
    <div>
      <button
        onClick={handleChange}
        disabled={action !== "Idle"}
        value={"Attack"}
      >
        Attack
      </button>
      <button
        onClick={handleChange}
        disabled={action !== "Idle"}
        value={"Block"}
      >
        Block
      </button>
      <button
        onClick={handleChange}
        disabled={action !== "Idle"}
        value={"Skill"}
      >
        Skill
      </button>
    </div>
  );
}

export default Controls;
