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
    setcurrentScreen("charTravel");
  };

  return (
    <>
      <h1 style={{ margin: "10px auto", color: "white", textAlign: "center" }}>
        Choose Your Class
      </h1>
      <div className="charSelectionContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Animation
            animation={KnightIdle}
            steps={4}
            direction={"forward"}
            fps={4}
            loop={true}
          />
          <button
            onClick={handleChange}
            value="Knight"
            style={{ width: "80px", margin: "auto" }}
          >
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
          <button
            onClick={handleChange}
            value="Wizard"
            style={{ width: "80px", margin: "auto" }}
          >
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
          <button
            onClick={handleChange}
            value="Archer"
            style={{ width: "80px", margin: "auto" }}
          >
            Archer
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: "80px" }}></div>
          <button
            onClick={handleChange}
            value="Archer"
            disabled={true}
            style={{ width: "80px", margin: "auto" }}
          >
            Coming Soon
          </button>
        </div>
      </div>
    </>
  );
}

export default CharsSelection;
