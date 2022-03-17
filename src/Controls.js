import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function Controls() {
  return (
    <div>
      <button>Attack</button>
      <button>Block</button>
      <button>Skill</button>
    </div>
  );
}

export default Controls;
