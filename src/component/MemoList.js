import React, { useState } from "react";
import MemoModal from "./MemoModal";

const MemoList = ({
  id,
  title,
  memo,
  saveDate,
  del,
  updateMemo,
  updateTitle
}) => {
  const [editMemo, setEditMemo] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [modal, setModal] = useState(false);

  const modalClose = () => {
    setModal(false);
  };

  return (
    <>
      <li>
        <a href="{() => false}">
          <div className="ListObject">
            <div onClick={(e) => setModal(true)} className="modalBtn"></div>
            <div className="Hole"></div>
            <button className="delBtn" onClick={() => del(id)}>
              <div className="Tack"></div>
            </button>

            <div className="memoTitle">{title}</div>
            <div className="memoDate">{saveDate}</div>
            <div className="Context">
              {editTitle ? (
                <input
                  type="text"
                  autoFocus
                  className="ModifyTitle"
                  maxLength="50"
                  defaultValue={title}
                  onBlur={(e) => {
                    setEditTitle(false);
                    updateTitle(id, e.target.value);
                  }}
                />
              ) : (
                <div
                  className="innerMemoTitle"
                  onClick={(e) => setEditTitle(!editTitle)}
                >
                  {title}
                </div>
              )}
              <hr />
              {editMemo ? (
                <textarea
                  className="ModifyMemo"
                  defaultValue={memo}
                  autoFocus
                  onBlur={(e) => {
                    setEditMemo(false);
                    updateMemo(id, e.target.value);
                  }}
                />
              ) : (
                <div
                  className="memoText"
                  onClick={(e) => setEditMemo(!editMemo)}
                >
                  {memo}
                </div>
              )}
            </div>
          </div>
        </a>
      </li>
      {modal ? (
        <MemoModal
          id={id}
          title={title}
          memo={memo}
          saveDate={saveDate}
          updateMemo={updateMemo}
          updateTitle={updateTitle}
          modalClose={modalClose}
        />
      ) : null}
    </>
  );
};

export default MemoList;
