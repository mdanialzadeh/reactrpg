import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { actionState } from "./atoms";

function Controls() {
  const [action, setAction] = useRecoilState(actionState);

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      if (action !== "Idle") {
        setAction("Idle");
      }
    }, 1000);
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
