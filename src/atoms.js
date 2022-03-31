import { atom } from "recoil";

export const animationStateUser = atom({
  key: "animationStateUser",
  default: "Idle",
});

export const animationStateComp = atom({
  key: "animationStateComp",
  default: "Idle",
});

export const roundStateUser = atom({
  key: "roundStateUser",
  default: "Idle",
});

export const roundStateComp = atom({
  key: "roundStateComp",
  default: "Idle",
});

export const activeScreen = atom({
  key: "activeScreen",
  default: "charSelection",
});

export const classType = atom({
  key: "classType",
  default: "none",
});

export const KnightStats = atom({
  key: "Knightstats",
  default: {
    class: "Knight",
    maxHP: 100,
    currentHP: 90,
    AttackDMG: 6,
    skillDMG: 2,
    Defense: 8,
    shield: 2,
  },
});

export const enemyStats = atom({
  key: "enemyStats",
  default: {
    name: "",
    maxHP: 0,
    currentHP: 0,
    AttackDMG: 0,
    skillDMG: 0,
    Defense: 0,
    shield: 0,
  },
});
