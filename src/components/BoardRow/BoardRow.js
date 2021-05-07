import BoardField from "components/BoardField/BoardField";
import "./BoardRow.css";

const BoardRow = ({ row, rowIndex }) => (
  <div className="row">
    {row.map((row, index) => (
      <BoardField
        rowIndex={rowIndex}
        fieldIndex={index}
        key={`${index}field${rowIndex}row`}
        {...row}
      />
    ))}
  </div>
);

export default BoardRow;
