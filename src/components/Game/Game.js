import Board from "components/Board/Board";
import GameStatistics from "components/GameStatistics/GameStatistics";

import "./Game.css";

const Game = () => (
  <div className="game">
    <GameStatistics />
    <Board />
  </div>
);

export default Game;
