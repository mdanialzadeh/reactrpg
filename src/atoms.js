import { atom } from "recoil";

export const actionState = atom({
  key: "actionState",
  default: "idle",
});

export const actionStateComp = atom({
  key: "actionStateComp",
  default: "idle",
});

export const activeScreen = atom({
  key: "activeScreen",
  default: "charSelection",
});
