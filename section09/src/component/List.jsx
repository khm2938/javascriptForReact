import StudentItem from "./StudentItem";
import { useState } from "react";
import "../css/List.css";

function List({ students, editingId, setEditingId, onClickDelete, onUpdateStudent }) {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");

  const onChangeSearchBox = (e) => {
    setText(e.target.value);
  };

  const onClickSearch = () => {
    setKeyword(text);
  };

  const getFilteredData = () => {
    if (keyword === "") return students;
    return students.filter((s) => s.name.includes(keyword));
  };

  const filteredStudent = getFilteredData();

  return (
    <div className="list">
      <h2>학생목록</h2>
      <p className="list-count">총 {students.length}명</p>

      <div className="search">
        <input
          onChange={onChangeSearchBox}
          type="text"
          name="searchBox"
          id="searchBox"
          placeholder="이름으로 검색"
          value={text}
        />
        <button type="button" onClick={onClickSearch}>
          검색
        </button>
      </div>

      {/* ✅ 테이블 */}
      <div className="table-wrap">
        <table className="students-table">
          <thead>
            <tr>
              <th className="col-id">id</th>
              <th className="col-name">이름</th>
              <th className="col-score">국어</th>
              <th className="col-score">영어</th>
              <th className="col-score">수학</th>
              <th className="col-total">총점</th>
              <th className="col-avg">평균</th>
              <th className="col-action"></th>
            </tr>
          </thead>

          <tbody>
            {filteredStudent.map((s) => (
              <StudentItem
                key={s.id}
                {...s}
                editingId={editingId}
                setEditingId={setEditingId}
                keyword={keyword}
                onClickDelete={onClickDelete}
                onUpdateStudent={onUpdateStudent}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
