import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  animationStateComp,
  animationStateUser,
  roundStateUser,
  roundStateComp,
} from "./atoms";

function Controls() {
  const [compAction, setCompAction] = useRecoilState(roundStateComp);
  const [animationUser, setAnimationUser] = useRecoilState(animationStateUser);
  const [animationComp, setAnimationComp] = useRecoilState(animationStateComp);
  const [userAction, setUserAction] = useRecoilState(roundStateUser);

  const handleChange = (event) => {
    setAnimationUser(event.target.value);
    setUserAction(event.target.value);

    const RandomAction = Math.floor(Math.random() * 3);

    switch (RandomAction) {
      case 0:
        setCompAction("Attack");
        setAnimationComp("Attack");
        break;
      case 1:
        setCompAction("Block");
        setAnimationComp("Block");
        break;
      case 2:
        setCompAction("Skill");
        setAnimationComp("Skill");
        break;
      default:
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (animationUser !== "Idle") {
        setAnimationUser("Idle");
        setAnimationComp("Idle");
      }
    }, 1600);
  }, [animationUser, setAnimationComp, setAnimationUser]);

  return (
    <div>
      <button
        onClick={handleChange}
        disabled={animationUser !== "Idle"}
        value={"Attack"}
      >
        Attack
      </button>
      <button
        onClick={handleChange}
        disabled={animationUser !== "Idle"}
        value={"Block"}
      >
        Block
      </button>
      <button
        onClick={handleChange}
        disabled={animationUser !== "Idle"}
        value={"Skill"}
      >
        Skill
      </button>
    </div>
  );
}

export default Controls;
