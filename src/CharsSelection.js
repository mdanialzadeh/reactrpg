import React, { useEffect } from "react";
import KnightIdle from "./Knight/knightIdle";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { activeScreen } from "./atoms";

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
        <KnightIdle />
        <button onClick={handleChange}>Knight</button>
      </div>
      <KnightIdle />
      <KnightIdle />
    </div>
  );
}

export default CharsSelection;
