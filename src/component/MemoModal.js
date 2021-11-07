import { useState } from "react";

const MemoModal = ({
  id,
  title,
  memo,
  saveDate,
  updateMemo,
  updateTitle,
  modalClose
}) => {
  const [editMemo, setEditMemo] = useState(false);
  const [editTitle, setEditTitle] = useState(false);

  return (
    <div className="modal" key={id}>
      <button onClick={modalClose}>&times;</button>
      <div className="modalBox">
        {editTitle ? (
          <input
            type="text"
            maxLength="50"
            className="ModifyTitle"
            autoFocus
            defaultValue={title}
            onBlur={(e) => {
              setEditTitle(false);
              updateTitle(id, e.target.value);
            }}
          />
        ) : (
          <p
            className="innerMemoTitle"
            onClick={(e) => setEditTitle(!editTitle)}
          >
            {title}
          </p>
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
          <p className="modalMemo" onClick={(e) => setEditMemo(!editMemo)}>
            {memo.split("\n").map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </p>
        )}

        <hr />
        <p>저장일 : {saveDate}</p>
      </div>
    </div>
  );
};

export default MemoModal;
