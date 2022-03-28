import "./App.css";

import Controls from "./Controls";
import Combat from "./Combat";
import { useRecoilValue } from "recoil";
import Round from "./Round";
import { activeScreen } from "./atoms";
import CharsSelection from "./CharsSelection";
import CharTravel from "./charTravel";

function Game() {
  const currentScreen = useRecoilValue(activeScreen);

  return (
    <div className="App">
      <Round />
      <div className="gameWrapper">
        {
          {
            charSelection: <CharsSelection />,
            charTravel: <CharTravel />,
            runGame: (
              <>
                <Combat />
                <Controls />
              </>
            ),
          }[currentScreen]
        }
      </div>
    </div>
  );
}

export default Game;
