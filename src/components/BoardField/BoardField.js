import { useSetRecoilState } from "recoil";
import { boardState } from "recoil/atoms";
import Miss from "assets/Miss.png";
import Hit from "assets/Hit.png";

import "./BoardField.css";

const BoardField = ({ type, rowIndex, fieldIndex }) => {
  const setBoard = useSetRecoilState(boardState);

  const onFire = () => {
    setBoard((board) => {
      const arrayCopy = [...board.map((row) => [...row])];
      arrayCopy[rowIndex][fieldIndex] = {
        ...arrayCopy[rowIndex][fieldIndex],
        type: arrayCopy[rowIndex][fieldIndex].id !== null ? "hit" : "miss",
      };
      return arrayCopy;
    });
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
