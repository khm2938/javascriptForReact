import { useRef, useState } from "react";
import "./css/App.css";
import Header from "./component/Header";
import Editor from "./component/Editor";
import List from "./component/List";

const mockData = [
  { id: 1, name: "홍길동", kor: 90, eng: 80, mat: 70 },
  { id: 2, name: "김철수", kor: 60, eng: 75, mat: 85 },
];

function App() {
  const [students, setStudents] = useState(mockData);
  const idRef = useRef(3);

  const onClickDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const addStudent = (name, kor, eng, mat) => {
    const newStudent = {
      id: idRef.current++,
      name,
      kor,
      eng,
      mat,
    };

    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <div className="App">
      <Header />
      <Editor addStudent={addStudent} />
      <List students={students} onClickDelete={onClickDelete} />
    </div>
  );
}

export default App;
