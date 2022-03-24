import "./App.css";
import Knight from "./Knight/Knight.js";
import Controls from "./Controls";
import Round from "./Round";
import Golem from "./Mobs/Rock.js";
import { useRecoilValue } from "recoil";
import Stats from "./Stats";
import { activeScreen } from "./atoms";
import CharsSelection from "./CharsSelection";

function Game() {
  const currentScreen = useRecoilValue(activeScreen);

  return (
    <div className="App">
      {
        {
          charSelection: <CharsSelection />,
          runGame: (
            <>
              <Round />
              <div className="game-container">
                <div className="game-canvas">
                  <div className="user-canvas">
                    <Stats />
                    <Knight />
                  </div>
                  <div className="enemy-canvas">
                    <Golem />
                  </div>
                </div>
              </div>
              <Controls />
            </>
          ),
        }[currentScreen]
      }
    </div>
  );
}

export default Game;
