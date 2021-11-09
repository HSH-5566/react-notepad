import React, { useState } from "react";
import MemoModal from "../memoModal/MemoModal";
import "./memoList.css";

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
  const [like, setLike] = useState(false);

  const likeBtnClick = () => {
    setLike(!like);
  }

  return (
    <>
      <li>
        <a href="#!">
          <div className="listObject">
            <div className={`likeBtn ${like ? 'likeBtnClick' : ''}`} onClick={likeBtnClick}></div>
            <div onClick={(e) => setModal(true)} className="modalBtn"></div>
            <div className="hole"></div>
            <button className="delBtn" onClick={() => del(id)}>
              <div className="tack"></div>
            </button>

            <div className="memoTitle">{title}</div>
            <div className="memoDate">{saveDate}</div>
            <div className="context">
              {editTitle ? (
                <input
                  type="text"
                  autoFocus
                  className="modifyTitle"
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
                  className="modifyMemo"
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
          modalClose={()=>setModal(false)}
        />
      ) : null}
    </>
  );
};

export default MemoList;
