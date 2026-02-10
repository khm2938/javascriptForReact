import StudentItem from "./StudentItem";
import { useState } from "react";

function List({ students, onClickDelete }) {
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

    const filteredStudent = students.filter((s) => s.name.includes(keyword));
    return filteredStudent;
  };

  const filteredStudent = getFilteredData();
  console.log(filteredStudent);

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
        />
        <button type="button" onClick={onClickSearch}>
          검색
        </button>
      </div>
      <div className="students-head">
        <span>학생</span>
        <span className="head-right">총점 / 평균 / 관리</span>
      </div>
      <ul className="students">
        {filteredStudent.map((s) => (
          <StudentItem key={s.id} {...s} keyword={keyword} onClickDelete={onClickDelete} />
        ))}
      </ul>
    </div>
  );
}
export default List;
