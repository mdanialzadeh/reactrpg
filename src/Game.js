import "./App.css";

import Controls from "./Controls";
import Combat from "./Combat";
import { useRecoilValue } from "recoil";
import Round from "./Round";
import { activeScreen } from "./atoms";
import CharsSelection from "./CharsSelection";
import CharTravel from "./CharTravel";

import Encounter from "./Encounter";

function Game() {
  const currentScreen = useRecoilValue(activeScreen);

  return (
    <div className="App">
      <div className="gameWrapper">
        {
          {
            charSelection: <CharsSelection />,
            charTravel: (
              <>
                <CharTravel />
              </>
            ),
            encounter: <Encounter />,
            runGame: (
              <>
                <Combat />
              </>
            ),
          }[currentScreen]
        }
      </div>
      {currentScreen === "charSelection" ? (
        <div className="controlhold">
          <svg viewBox="1 -0.5 100 50">
            <rect
              fill="grey"
              x={"5%"}
              y={"30%"}
              rx={1}
              ry={1}
              width={"30%"}
              height={"20%"}
              stroke="black"
              stroke-width="2"
            />
            <rect
              fill="grey"
              x={"15%"}
              y={"10%"}
              width={"10%"}
              height={"60%"}
              stroke="black"
              rx={1}
              ry={1}
              stroke-width="2"
            />
            <rect
              fill="grey"
              x={"5%"}
              y={"30%"}
              rx={1}
              ry={1}
              width={"30%"}
              height={"20%"}
              stroke="black"
              stroke-width="0"
            />
            <rect
              fill="grey"
              x={"15%"}
              y={"10%"}
              width={"10%"}
              height={"60%"}
              stroke="black"
              rx={1}
              ry={1}
              stroke-width="0"
            />

            <circle
              cx="85"
              cy="15"
              r="8"
              stroke="black"
              stroke-width="1"
              fill="grey"
            ></circle>
            <circle
              cx="60"
              cy="25"
              r="8"
              stroke="black"
              stroke-width="1"
              fill="grey"
            ></circle>
            <text
              draggable={false}
              x="100.5"
              y="23.5"
              fill="black"
              transform="scale(.8)"
            >
              A
            </text>
            <text x="70" y="36.5" fill="black" transform="scale(.8)">
              B
            </text>
          </svg>
        </div>
      ) : (
        <div className="controlwrapper">
          <Round />
          <Controls />
        </div>
      )}
    </div>
  );
}

export default Game;
