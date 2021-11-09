import React from "react";
import MemoFunction from "../memoFunction/MemoFunction";
import "./memoForm.css";

const MemoForm = ({ title, memo, handleTitle, handleMemo, removeBtn, saveBtn }) => {
  return (
    <div className="memoArea">
      <input 
        type="text"
        value={title}
        className="title"
        onChange={handleTitle}
        placeholder="제목을 입력해주세요"
        maxLength="50"
      />
      <span className="titleNum">{title.length} / 50</span>
      <hr />
      <textarea
        value={memo}
        className="memo"
        onChange={handleMemo}
        placeholder="내용을 입력해주세요"
      ></textarea>
      <MemoFunction removeBtn={removeBtn} saveBtn={saveBtn} />
    </div>
    );
  };

export default MemoForm;