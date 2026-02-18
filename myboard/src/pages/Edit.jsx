import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { BoardStateContext } from "../contexts/BoardStateContext";
import { BoardDispatchContext } from "../contexts/BoardDispatchContext";
import "../css/Edit.css"

const Edit = () => {
  // 기존 데이터에서 board 찾기
  const { id } = useParams();
  const nav = useNavigate();

  const boards = useContext(BoardStateContext);
  const { onUpdate } = useContext(BoardDispatchContext);

  const board = boards.find((b) => b.id === Number(id));

  // 기존 데이터에서 board 없을 경우
  if (!board) {
    return (
      <div className="edit-container">
        <h2>글을 찾을 수 없습니다.</h2>
        <button onClick={() => nav("/")}>목록</button>
      </div>
    )
  }
  //입력값 state
  const [title, setTitle] = useState(board.title);
  const [content, setContent] = useState(board.content);
  const [category, setCategory] = useState(board.category);
  const [level, setLevel] = useState(board.level);
  const [summary, setSummary] = useState(board.summary);

  //저장 버튼 핸들러
  const handleSave = () => {
    if (title.trim() === "") return alert("제목을 입력하세요");
    if (content.trim() === "") return alert("내용을 입력하세요");

    onUpdate(board.id, { title, content, category, level, summary });
    nav(`/detail/${board.id}`);
  };

  return <>
    <div className="edit-container">
      <h1>글 수정</h1>

      <select
        className="new-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Java">자바</option>
        <option value="React">리액트</option>
        <option value="Spring">스프링부트</option>
        <option value="DB">DB</option>
        <option value="CS">CS</option>
        <option value="ETC">기타</option>
      </select>

      <select
        className="new-select"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="입문">입문</option>
        <option value="초급">초급</option>
        <option value="중급">중급</option>
      </select>

      <input
        className="new-input"
        type="text"
        placeholder="제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="new-input"
        type="text"
        placeholder="한 줄 요약"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      <textarea
        className="edit-textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />

      <div>
        <button className="edit-btn" onClick={handleSave}>저장</button>
        <button className="edit-btn" onClick={() => nav(-1)}>취소</button>
      </div>
    </div>
  </>
}
export default Edit;