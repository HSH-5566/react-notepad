import React from "react";
import MemoFunction from "./MemoFunction";

const Memo = ({ title, memo, handleTitle, handleMemo, removeBtn, saveBtn }) => {
  return (
    <div className="MemoArea">
      <input
        type="text"
        value={title}
        className="Title"
        onChange={handleTitle}
        placeholder="제목을 입력해주세요"
        maxLength="50"
      />
      <span className="TitleNum">{title.length} / 50</span>
      <hr />
      <textarea
        value={memo}
        className="Memo"
        onChange={handleMemo}
        placeholder="내용을 입력해주세요"
      ></textarea>
      <MemoFunction removeBtn={removeBtn} saveBtn={saveBtn} />
    </div>
  );
};

export default Memo;
