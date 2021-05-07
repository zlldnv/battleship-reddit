import { useRecoilValue } from "recoil";

import { shipsState } from "recoil/atoms";
import PlayerOneCounter from "../Counter/PlayerOneCounter";
import PlayerTwoCounter from "../Counter/PlayerTwoCounter";
import ShipStatistics from "../ShipStatistics/ShipStatistics";
import "./GameStatistics.css";

const GameStatistics = () => {
  const ships = useRecoilValue(shipsState);
  return (
    <div className="gameStatistics">
      <div className="players">
        <PlayerOneCounter />
        <PlayerTwoCounter />
      </div>
      <div className="ships">
        {ships.map((ship, index) => (
          <ShipStatistics key={`${index}${ship.name}`} {...ship} />
        ))}
      </div>
    </div>
  );
};

export default GameStatistics;
