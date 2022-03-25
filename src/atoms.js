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
  default: "",
});

export const roundStateComp = atom({
  key: "roundStateComp",
  default: "",
});

export const activeScreen = atom({
  key: "activeScreen",
  default: "charSelection",
});

export const KnightStats = atom({
  key: "Knightstats",
  default: {
    class: "Knight",
    maxHP: "100",
    currentHP: "90",
    AttackDMG: "6",
    skillDMG: "2",
    Defense: "8",
  },
});
