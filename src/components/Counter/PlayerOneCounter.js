import { useRecoilValue } from "recoil";
import { killedCounterState } from "../../recoil/selectors";
import "./Counter.css";

const PlayerOneCounter = () => {
  const killedCounter = useRecoilValue(killedCounterState);
  return (
    <div className="counterContainer first">
      <div className="counter">{killedCounter}</div>
      <div className="counterText">Player 1</div>
    </div>
  );
};

export default PlayerOneCounter;
