import "../css/New.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BoardDispatchContext } from "../contexts/BoardDispatchContext";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(BoardDispatchContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("React");
  const [level, setLevel] = useState("입문");
  const [summary, setSummary] = useState("");

  //등록 로직
  const handleSubmit = () => {
    if (title.trim() === "") {
      alert("제목을 입력하세요.");
      return;
    }
    if (content.trim() === "") {
      alert("내용을 입력하세요.");
      return;
    }
    onCreate({ title, content, category, level, summary });
    nav("/");
  }

  return <>
    <div className="new-container">
      <h1>새글 작성</h1>
    
    
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
      className="new-textarea"
      placeholder="내용 입력"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />

    <div>
      <button className="new-btn" onClick={handleSubmit}>
        등록
      </button>
      <button className="new-btn" onClick={() => nav(-1)}>
        취소
      </button>
    </div>
    </div>
  </>
}
export default New;