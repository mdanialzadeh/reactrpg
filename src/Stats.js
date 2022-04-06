import React from "react";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ stats, position }) => {
  return (
    <div className={position}>
      <div>HP: {stats.currentHP}</div>
      <div>Attack: {stats.AttackDMG}</div>
      <div>Defense: {stats.Defense}</div>
      <div>Ability Power: {stats.skillDMG}</div>
    </div>
  );
};
