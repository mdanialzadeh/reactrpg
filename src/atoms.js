import { atom } from "recoil";

export const actionState = atom({
  key: "actionState",
  default: "idle",
});

export const actionStateComp = atom({
  key: "actionStateComp",
  default: "idle",
});
