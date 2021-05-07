import { atom } from "recoil";

import { ships, boardSchema } from "helpers/boardGenerator";

export const boardState = atom({ key: "board", default: boardSchema });

export const shipsState = atom({ key: "shipTypes", default: ships });
