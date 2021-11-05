import React from "react";

const MemoFunction = ({ removeBtn, saveBtn }) => {
  return (
    <div className="FunctionArea">
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
