import "./App.css";
import Knight from "./Knight.js";
import Controls from "./Controls";
import Round from "./Round";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Round />
        <div className="game-container">
          <div className="game-canvas">
            <Knight />
          </div>
        </div>
        <Controls />
      </RecoilRoot>
    </div>
  );
}

export default App;
