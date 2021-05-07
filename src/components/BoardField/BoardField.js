import { useSetRecoilState } from "recoil";
import { boardState, shipsState } from "recoil/atoms";
import Miss from "assets/Miss.png";
import Hit from "assets/Hit.png";

import "./BoardField.css";

const BoardField = ({ id, type, rowIndex, fieldIndex }) => {
  const setBoard = useSetRecoilState(boardState);
  const setShips = useSetRecoilState(shipsState);

  const onFire = () => {
    if (type === "notTouched") {
      setBoard((board) => {
        const arrayCopy = [...board.map((row) => [...row])];
        arrayCopy[rowIndex][fieldIndex] = {
          ...arrayCopy[rowIndex][fieldIndex],
          type: arrayCopy[rowIndex][fieldIndex].id !== null ? "hit" : "miss",
        };
        return arrayCopy;
      });

      if (id !== null) {
        setShips((shipsValue) => {
          const shipsCopy = [...shipsValue];
          shipsCopy[id] = {
            ...shipsCopy[id],
            killed: shipsCopy[id].killed + 1,
          };
          return shipsCopy;
        });
      }
    }
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
