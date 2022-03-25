import React from "react";
import KnightIdle from "./Assets/Classes/Knight/KnightIdle.png";
import WizardIdle from "./Assets/Classes/Wizard/WizardIdle.png";
import { useRecoilState } from "recoil";
import { activeScreen } from "./atoms";
import Animation from "./Assets/Animation";

function CharsSelection() {
  const [currentscreen, setcurrentScreen] = useRecoilState(activeScreen);

  const handleChange = (event) => {
    setcurrentScreen("runGame");
    console.log(event);
    console.log({ currentscreen });
  };

  return (
    <div className="charSelectionContainer">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Animation
          animation={KnightIdle}
          steps={4}
          direction={"forward"}
          fps={4}
        />
        <button onClick={handleChange}>Knight</button>
      </div>
      <Animation
        animation={WizardIdle}
        steps={4}
        direction={"forward"}
        fps={4}
      />
      <Animation
        animation={KnightIdle}
        steps={4}
        direction={"forward"}
        fps={4}
      />
    </div>
  );
}

export default CharsSelection;
