import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { roundStateUser, roundStateComp } from "./atoms.js";

function Round() {
  const userRoundAction = useRecoilValue(roundStateUser);
  const compRoundAction = useRecoilValue(roundStateComp);

  return (
    <div>
      <>{userRoundAction}</>
      <>{compRoundAction}</>
    </div>
  );
}

export default Round;
