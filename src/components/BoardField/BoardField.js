import "./BoardField.css";

const BoardField = () => {
  const onFire = () => {
    console.log("FIRE!");
  };

  return <div className="field" onClick={onFire}></div>;
};

export default BoardField;
