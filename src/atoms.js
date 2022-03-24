import { atom } from "recoil";

export const actionState = atom({
  key: "actionState",
  default: "idle",
});

export const actionStateComp = atom({
  key: "actionStateComp",
  default: "idle",
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
