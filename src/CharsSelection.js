import React from "react";
import KnightIdle from "./Assets/Classes/Knight/KnightIdle.png";
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
        <Animation animation={KnightIdle} />
        <button onClick={handleChange}>Knight</button>
      </div>
      <Animation animation={KnightIdle} />
      <Animation animation={KnightIdle} />
    </div>
  );
}

export default CharsSelection;
