import { useRecoilValue } from "recoil";
import { boardState } from "recoil/atoms";
import BoardRow from "components/BoardRow/BoardRow";
import "./Board.css";

const Board = () => {
  const board = useRecoilValue(boardState);
  return (
    <div className="board">
      {board.map((row, index) => (
        <BoardRow row={row} rowIndex={index} key={`${index}row`} />
      ))}
    </div>
  );
};

export default Board;
