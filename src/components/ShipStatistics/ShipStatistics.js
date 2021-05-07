import LifeIndicator from "components/LifeIndicator/LifeIndicator";
import "./ShipStatistics.css";

const ShipStatistics = ({ size, shipName, killed }) => (
  <div className="card">
    <div className="shipName">{shipName}</div>
    <LifeIndicator killed={killed} size={size} />
  </div>
);

export default ShipStatistics;
