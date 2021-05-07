import "./BoardField.css";
import Hit from "assets/Hit.png";
import Miss from "assets/Miss.png";

const BoardField = ({ type }) => {
  const onFire = () => {
    console.log("FIRE!");
  };

  const filedImage = () => {
    if (type === "hit") {
      return Hit;
    }

    if (type === "miss") {
      return Miss;
    }
  };

  return (
    <div className="field" onClick={onFire}>
      {filedImage() && (
        <img className="fieldImage" src={filedImage()} alt="fieldImage" />
      )}
    </div>
  );
};

export default BoardField;
