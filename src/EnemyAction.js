import React from "react";

function EnemyAction() {
  const computerplay = () => {
    const RandomAction = Math.floor(Math.random() * 3);
    switch (RandomAction) {
      case 0:
        return "Attack";

      case 1:
        return "Defend";

      case 2:
        return "Skill";

      default:
        return "Idle";
    }
  };

  return <div>EnemyAction</div>;
}

export default EnemyAction;
