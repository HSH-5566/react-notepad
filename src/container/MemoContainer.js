import React, { useState } from "react";
import MemoForm from "../component/memoForm/MemoForm";
import MemoList from "../component/memoList/MemoList";

const MemoContainer = () => {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);
  const memoId =
    memoList.length === 0 ? 1 : memoList[memoList.length - 1].id + 1;

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleMemo = (e) => {
    setMemo(e.target.value);
  };

  const saveBtn = () => {
    const date = new Date();
    const memoObject = {
      id: memoId,
      title,
      memo,
      saveDate: date.toLocaleString()
    };

    setMemoList([...memoList, memoObject]);
    setTitle("");
    setMemo("");
  };

  const removeBtn = () => {
    setMemo("");
    setTitle("");
  };

  const del = (id) => {
    const memoListCopy = memoList.filter((item) => item.id !== id);
    setMemoList(memoListCopy);
  };

  const updateMemo = (id, memo) => {
    const memoListCopy = memoList.map((item) =>
      item.id === id ? { ...item, memo } : item
    );
    setMemoList(memoListCopy);
  };

  const updateTitle = (id, title) => {
    const memoListCopy = memoList.map((item) =>
      item.id === id ? { ...item, title } : item
    );
    setMemoList(memoListCopy);
  };

  return (
    <div className="screen">
      <div className="writeArea">
        <MemoForm
          title={title}
          memo={memo}
          handleTitle={handleTitle}
          handleMemo={handleMemo}
          removeBtn={removeBtn}
          saveBtn={saveBtn}
        />
      </div>
      <div className="listArea">
        {memoList.map((text) => (
          <MemoList
            key={text.id}
            id={text.id}
            title={text.title}
            memo={text.memo}
            saveDate={text.saveDate}
            del={del}
            updateMemo={updateMemo}
            updateTitle={updateTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoContainer;
