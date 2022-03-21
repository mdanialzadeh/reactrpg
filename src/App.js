import Game from "./Game";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Game />
    </RecoilRoot>
  );
}

export default App;
