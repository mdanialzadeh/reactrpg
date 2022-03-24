import React from "react";
import { KnightStats } from "./atoms.js";
import { useRecoilValue } from "recoil";

function Stats() {
  const stats = useRecoilValue(KnightStats);
  return (
    <div className="statsContainer">
      <div>HP: {stats.currentHP}</div>
      <div>Attack: {stats.AttackDMG}</div>
      <div>Defense: {stats.Defense}</div>
      <div>Ability Power: {stats.skillDMG}</div>
    </div>
  );
}

export default Stats;
