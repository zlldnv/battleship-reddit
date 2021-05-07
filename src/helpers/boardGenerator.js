import shipLayout from "data";
import { BOARD_SIZE } from "consts";

const { layout, shipTypes } = shipLayout;

const parseLayout = (layout) => {
  const ships = [];
  const boardSchema = new Array(BOARD_SIZE)
    .fill(null)
    .map(() => new Array(BOARD_SIZE).fill({ id: null, type: "notTouched" }));

  let COUNT_TOTAL = 0;

  layout.forEach((layoutItem, index) => {
    COUNT_TOTAL = COUNT_TOTAL + layoutItem.positions.length;
    layoutItem.positions.forEach(([x, y]) => {
      boardSchema[x][y] = {
        ...boardSchema[x][y],
        id: index,
      };
    });
    ships.push({
      shipName: layoutItem.ship,
      size: shipTypes[layoutItem.ship].size,
      killed: 0,
    });
  });
  return { boardSchema, COUNT_TOTAL, ships };
};

const { COUNT_TOTAL, boardSchema, ships } = parseLayout(layout);

export { boardSchema, ships, COUNT_TOTAL };
