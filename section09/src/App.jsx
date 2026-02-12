import { useState, useRef } from "react";
import Header from "./component/Header";
import Editor from "./component/Editor";
import List from "./component/List";
import "./css/App.css";
import "./css/Editor.css";
import "./css/List.css";

const mockData = [
  { id: 1, name: "홍길동", kor: 90, eng: 80, mat: 70 },
  { id: 2, name: "김철수", kor: 100, eng: 95, mat: 90 },
];

function App() {
  const [students, setStudents] = useState(mockData);
  const [editingId, setEditingId] = useState(null);

  const idRef = useRef(3);

  //학생성적 추가
  const addStudent = (name, kor, eng, mat) => {
    const newStudent = {
      id: idRef.current++,
      name: name,
      kor: kor,
      eng: eng,
      mat: mat,
    };

    setStudents([...students, newStudent]);
  };
  console.log(students);

  //학생성적 삭제
  const onClickDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id)); // filter된 새로운 배열로 새로운 Students배열을 set한다
  };

  //학생성적 수정
  const onUpdateStudent = (id, updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updatedStudent } : s)),
    );
  };

  return (
    <>
      <div className="App">
        <Header />
        <Editor addStudent={addStudent} editingId={editingId} />
        <List
          students={students}
          onClickDelete={onClickDelete}
          onUpdateStudent={onUpdateStudent}
          editingId={editingId}
          setEditingId={setEditingId}
        />
      </div>
    </>
  );
}

export default App;
