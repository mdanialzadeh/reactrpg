import "./App.css";
import Knight from "./Knight/Knight.js";
import Controls from "./Controls";
import Round from "./Round";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
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
                  <Knight />
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
