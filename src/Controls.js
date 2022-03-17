import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function Controls() {
  const [Action, SetAction] = useRecoilState(actionState);

  return (
    <div>
      <button onClick={SetAction("Attack")}>Attack</button>
      <button onClick={SetAction("Block")}>Block</button>
      <button onClick={SetAction("Skill")}>Skill</button>
    </div>
  );
}

export default Controls;
