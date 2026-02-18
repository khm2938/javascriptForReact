import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardStateContext } from "../contexts/BoardStateContext";
import { BoardDispatchContext } from "../contexts/BoardDispatchContext";

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const boards = useContext(BoardStateContext);
  const { onUpdate } = useContext(BoardDispatchContext);

  // 현재 글 찾기
  const curBoard = useMemo(() => {
    if (!Array.isArray(boards)) return undefined;
    return boards.find((b) => String(b.id) === String(id));
  }, [boards, id]);

  // 폼 상태
  const [form, setForm] = useState({
    title: "",
    category: "React",
    level: "입문",
    content: "",
  });

  // 글 데이터가 준비되면 폼 초기화
  useEffect(() => {
    if (!curBoard) return;

    setForm({
      title: curBoard.title ?? "",
      category: curBoard.category ?? "React",
      level: curBoard.level ?? "입문",
      content: curBoard.content ?? "",
    });
  }, [curBoard]);

  // 해당 글 없는 경우
  if (boards.length > 0 && !curBoard) {
    return (
      <div style={{ padding: 20 }}>
        <p>존재하지 않는 글입니다. (id: {id})</p>
        <button onClick={() => nav("/", { replace: true })}>홈으로</button>
      </div>
    );
  }

  // 입력 변경
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 저장
  const onSubmit = (e) => {
    e.preventDefault();

    onUpdate(Number(id), {
      title: form.title,
      content: form.content,
      category: form.category,
      level: form.level,
    });

    nav(`/detail/${id}`, { replace: true });
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h2>글 수정</h2>

      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 12 }}
      >
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="제목"
        />

        <select name="category" value={form.category} onChange={onChange}>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Spring">Spring</option>
          <option value="DB">DB</option>
          <option value="CS">CS</option>
          <option value="ETC">ETC</option>
        </select>

        <select name="level" value={form.level} onChange={onChange}>
          <option value="입문">입문</option>
          <option value="초급">초급</option>
          <option value="중급">중급</option>
        </select>

        <textarea
          name="content"
          value={form.content}
          onChange={onChange}
          placeholder="내용"
          rows={10}
        />

        <div style={{ display: "flex", gap: 10 }}>
          <button type="button" onClick={() => nav(-1)}>
            취소
          </button>
          <button type="submit">저장</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
