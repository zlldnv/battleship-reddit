import { selector } from "recoil";
import { shipsState } from "./atoms";

export const killedCounterState = selector({
  key: "killedCounter",
  get: ({ get }) => {
    const ships = get(shipsState);
    let killed = 0;
    ships.forEach((ship) => {
      if (ship.killed === ship.size) {
        killed += 1;
      }
    });
    return killed;
  },
});
