import { useState } from "react";
import "../css/Editor.css";

function Editor({ addStudent, editingId }) {
  const [name, setName] = useState("");
  const [kor, setKor] = useState("");
  const [eng, setEng] = useState("");
  const [mat, setMat] = useState("");

  const isLocked = editingId !== null;

  const onClickAdd = () => {
    addStudent(name, kor, eng, mat);
    // 필요하면 입력 초기화
    setName("");
    setKor("");
    setEng("");
    setMat("");
  };

  return (
    <div className="editor">
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLocked}
      />
      <input
        type="number"
        placeholder="국어성적(0~100)"
        value={kor}
        onChange={(e) => setKor(e.target.value)}
        disabled={isLocked}
      />
      <input
        type="number"
        placeholder="영어성적(0~100)"
        value={eng}
        onChange={(e) => setEng(e.target.value)}
        disabled={isLocked}
      />
      <input
        type="number"
        placeholder="수학성적(0~100)"
        value={mat}
        onChange={(e) => setMat(e.target.value)}
        disabled={isLocked}
      />
      <button type="button" onClick={onClickAdd} disabled={isLocked}>
        등록
      </button>
    </div>
  );
}

export default Editor;
