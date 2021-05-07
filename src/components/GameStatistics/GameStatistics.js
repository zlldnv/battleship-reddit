import { useRecoilValue } from "recoil";

import { shipsState } from "recoil/atoms";

import ShipStatistics from "../ShipStatistics/ShipStatistics";
import "./GameStatistics.css";

const GameStatistics = () => {
  const ships = useRecoilValue(shipsState);
  return (
    <div className="ships">
      {ships.map((ship, index) => (
        <ShipStatistics key={`${index}${ship.name}`} {...ship} />
      ))}
    </div>
  );
};

export default GameStatistics;
