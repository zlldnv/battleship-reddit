import Game from "components/Game/Game";
import { COUNT_TOTAL } from "helpers/boardGenerator";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { boardState, shipsState } from "recoil/atoms";
import { killedCounterState } from "recoil/selectors";

const App = () => {
  const killedCounter = useRecoilValue(killedCounterState);
  const resetBoard = useResetRecoilState(boardState);
  const resetShipsState = useResetRecoilState(shipsState);
  const onStartNewGame = () => {
    resetBoard();
    resetShipsState();
  };
  console.log(COUNT_TOTAL);
  //console.log(killedCounter);
  return COUNT_TOTAL !== killedCounter ? (
    <Game />
  ) : (
    <button onClick={onStartNewGame}>START AGAIN</button>
  );
};

export default App;
