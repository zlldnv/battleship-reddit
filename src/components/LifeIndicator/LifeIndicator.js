import HitSmall from "assets/Hit small.png";
import MissSmall from "assets/Miss small.png";
import "./LifeIndicator.css";

const LifeIndicator = ({ killed, size }) => {
  const lifeIndicators = [];
  for (let index = 0; index < size; index++) {
    lifeIndicators.push(
      <img
        key={`${index}${size}`}
        src={killed > index ? HitSmall : MissSmall}
        size={32}
        className="lifeIndicator"
        alt="lifeIndicator"
      />
    );
  }
  return <div className="shipLife">{lifeIndicators}</div>;
};

export default LifeIndicator;
