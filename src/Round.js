import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  roundStateUser,
  roundStateComp,
  enemyStats,
  KnightStats,
} from "./atoms.js";

function Round() {
  const userRoundAction = useRecoilValue(roundStateUser);
  const compRoundAction = useRecoilValue(roundStateComp);
  const [enemystats, setEnemyStats] = useRecoilState(enemyStats);
  const [userstats, setUserStats] = useRecoilState(KnightStats);

  var enemyHP = parseInt(enemystats.currentHP);
  var enemyAtkDmg = parseInt(enemystats.AttackDMG);
  var enemySkillDmg = parseInt(enemystats.skillDMG);
  var enemyDef = parseInt(enemystats.Defense);
  var enemySheild = parseInt(enemystats.shield);

  var userHP = parseInt(userstats.currentHP);
  var userAtkDmg = parseInt(userstats.AttackDMG);
  var userSkillDmg = parseInt(userstats.skillDMG);
  var userDef = parseInt(userstats.Defense);

  useEffect(() => {
    if (
      (userRoundAction === "Attack" && compRoundAction === "Skill") ||
      (userRoundAction === "Skill" && compRoundAction === "Block") ||
      (userRoundAction === "Block" &&
        compRoundAction === "Attack" &&
        enemystats.currentHP >= 0)
    ) {
      switch ((userRoundAction, compRoundAction)) {
        case ("Attack", "Skill"):
          console.log("player Attacks Enemy use skill");
          setEnemyStats({
            ...enemystats,
            currentHP: enemyHP - userAtkDmg,
          });
          break;
        case ("Skill", "Block"):
          console.log("player uses Skill Enemy Blocks");
          setEnemyStats({
            ...enemystats,
            currentHP: enemyHP - (userSkillDmg - enemySheild),
          });
          break;
        case ("Block", "Attack"):
          console.log("player Blocks Enemy uses Attack");
          setEnemyStats({
            ...enemystats,
            currentHP: enemyHP - userAtkDmg,
          });
          break;
        default:
      }
    } else if (
      (userRoundAction === "Attack" && compRoundAction === "Block") ||
      (userRoundAction === "Block" && compRoundAction === "Skill") ||
      (userRoundAction === "Skill" && compRoundAction === "Attack")
    ) {
      switch ((userRoundAction, compRoundAction)) {
        case ("Attack", "Block"):
          console.log("player Attacks enemy Blocks");
          break;
        case ("Skill", "Attack"):
          console.log("player uses Skill Enemy Attacks");
          break;
        case ("Block", "Skill"):
          console.log("player Blocks Enemy used Skill");
          break;
        default:
      }
    } else if (userRoundAction === compRoundAction) {
      console.log("tie");
      switch ((userRoundAction, compRoundAction)) {
        case ("Attack", "Attack"):
          console.log("you both attack");
          break;
        case ("skill", "skill"):
          console.log("you both used skill");
          break;
        case ("Block", "Block"):
          console.log("you both Block");
          break;
        default:
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compRoundAction, userRoundAction]);

  return (
    <div style={{ color: "white" }}>
      <>{userRoundAction}</>
      <>{compRoundAction}</>
    </div>
  );
}

export default Round;
