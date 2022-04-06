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

export const icons = atom({
  key: "icons",
  default: {
    attackIcon: "",
    defendIcon: "",
    skillIcon: "",
  },
});

export const userStats = atom({
  key: "userStats",
  default: {
    class: "",
    maxHP: null,
    currentHP: null,
    AttackDMG: null,
    skillDMG: null,
    Defense: null,
    shield: null,
  },
});

export const enemyStats = atom({
  key: "enemyStats",
  default: {
    name: "",
    maxHP: null,
    currentHP: null,
    AttackDMG: null,
    skillDMG: null,
    Defense: null,
    shield: null,
  },
});
