import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/New.css";
import { BoardDispatchContext } from "../contexts/BoardDispatchContext";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(BoardDispatchContext);

  const [form, setForm] = useState({
    category: "React",
    level: "입문",
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onCreate({
      title: form.title,
      content: form.content,
      category: form.category,
      level: form.level,
    });

    nav("/", { replace: true });
  };

  return (
    <div className="new-container">
      <div className="new-inner">
        <div className="new-header">
          <h1 className="new-title">새글 작성</h1>
        </div>

        <div className="new-card">
          <form className="new-form" onSubmit={onSubmit}>
            <select
              className="new-select"
              name="category"
              value={form.category}
              onChange={onChange}
            >
              <option value="React">React</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Spring">Spring</option>
              <option value="DB">DB</option>
              <option value="CS">CS</option>
              <option value="ETC">ETC</option>
            </select>

            <select
              className="new-select"
              name="level"
              value={form.level}
              onChange={onChange}
            >
              <option value="입문">입문</option>
              <option value="초급">초급</option>
              <option value="중급">중급</option>
            </select>

            <input
              className="new-input"
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="제목 입력"
            />

            <textarea
              className="new-textarea"
              name="content"
              value={form.content}
              onChange={onChange}
              placeholder="내용 입력"
            />

            <div className="new-actions">
              <button type="submit">등록</button>
              <button type="button" onClick={() => nav(-1)}>
                취소
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
