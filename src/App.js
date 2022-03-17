import "./App.css";
import Knight from "./Knight";
import Controls from "./Controls";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  const actionState = atom({
    key: "actionState",
    default: "idle",
  });

  console.log(actionState);

  return (
    <div className="App">
      <RecoilRoot>
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
