import React, { useEffect, useState } from "react";
import Spritesheet from "react-responsive-spritesheet";
import KnightIdle from "./Assets/Knight/KnightIdle.png";
import KnightAtk from "./Assets/Knight/KnightAtk.png";
import KnightSkill from "./Assets/Knight/KnightSkill.png";
import KnightBlock from "./Assets/Knight/KnightBlock.png";
import { useRecoilValue } from "recoil";
import { actionState } from "./atoms";

function Knight() {
  const action = useRecoilValue(actionState);

  return (
    <div className="charContainer">
      {action === "Idle" ? (
        <Spritesheet
          autoplay={true}
          image={KnightIdle}
          widthFrame={90}
          heightFrame={60}
          steps={4}
          fps={4}
          loop={true}
        />
      ) : (
        {
          Attack: (
            <Spritesheet
              autoplay={true}
              image={KnightAtk}
              widthFrame={90}
              heightFrame={60}
              steps={4}
              fps={4}
              loop={true}
            />
          ),
          Block: (
            <Spritesheet
              autoplay={true}
              image={KnightBlock}
              widthFrame={90}
              heightFrame={60}
              steps={4}
              fps={4}
              loop={true}
              startAt={1}
            />
          ),
          Idle: (
            <Spritesheet
              autoplay={true}
              image={KnightIdle}
              widthFrame={90}
              heightFrame={60}
              steps={4}
              fps={4}
              loop={true}
            />
          ),
          Skill: (
            <Spritesheet
              autoplay={true}
              image={KnightSkill}
              widthFrame={90}
              heightFrame={60}
              steps={4}
              fps={4}
              loop={true}
              startAt={1}
            />
          ),
        }[action]
      )}
    </div>
  );
}

export default Knight;
