import React from "react";
import "./memoFunction.css";

const MemoFunction = ({ removeBtn, saveBtn }) => {
  return (
    <div className="functionArea">
      <button className="saveBtn" onClick={saveBtn}>
        SAVE
      </button>
      <br />
      <button className="removeBtn" onClick={removeBtn}>
        RESET
      </button>
    </div>
  );
};

export default MemoFunction;
