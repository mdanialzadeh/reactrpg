import React from "react";
import KnightIdle from "./Assets/Classes/Knight/KnightIdle.png";
import WizardIdle from "./Assets/Classes/Wizard/wizardIdle.png";
import ArcherIdle from "./Assets/Classes/Archer/archerIdle.png";
import { useRecoilState } from "recoil";
import { activeScreen, classType } from "./atoms";
import Animation from "./Assets/Animation";

function CharsSelection() {
  const [currentscreen, setcurrentScreen] = useRecoilState(activeScreen);
  const [currentClassType, setCurrentClassType] = useRecoilState(classType);

  const handleChange = (event) => {
    setCurrentClassType(event.target.value);
    setcurrentScreen("runGame");
  };

  return (
    <>
      <h1 style={{ margin: "0 auto" }}>Choose Your Class</h1>
      <div className="charSelectionContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Animation
            animation={KnightIdle}
            steps={4}
            direction={"forward"}
            fps={4}
            loop={true}
          />
          <button onClick={handleChange} value="Knight">
            Knight
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Animation
            animation={WizardIdle}
            steps={4}
            direction={"forward"}
            fps={4}
            loop={true}
          />
          <button onClick={handleChange} value="Wizard">
            Wizard
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Animation
            animation={ArcherIdle}
            steps={4}
            direction={"forward"}
            fps={4}
            loop={true}
          />
          <button onClick={handleChange} value="Archer">
            Archer
          </button>
        </div>
      </div>
    </>
  );
}

export default CharsSelection;
