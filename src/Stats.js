import React from "react";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default ({ stats }) => {
  return (
    <div className="statsContainer">
      <div>HP: {stats.currentHP}</div>
      <div>Attack: {stats.AttackDMG}</div>
      <div>Defense: {stats.Defense}</div>
      <div>Ability Power: {stats.skillDMG}</div>
    </div>
  );
};
