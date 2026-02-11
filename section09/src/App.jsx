import { useState,useRef } from 'react';
import Header from './component/Header'
import Editor from './component/Editor';
import List from './component/List';
import './css/App.css';
import "./css/Editor.css";
import "./css/List.css";


const mockData = [
  { id: 1, name: "홍길동", kor: 90, eng: 80, mat: 70 },
  { id: 2, name: "김철수", kor: 100, eng: 95, mat: 90 },
];

function App() {
  const [students, setStudents ] = useState(mockData);
  const idRef = useRef(3);
  

  const addStudent = (name,kor,eng,mat)=>{

    const newStudent = {
      id:idRef.current++,
      name:name,
      kor:kor,
      eng:eng,
      mat:mat
    }

    setStudents([...students,newStudent])
  }
  console.log(students);

  const onClickDelete = (id) => {
    setStudents(students.filter((s)=>s.id !== id)) // filter된 새로운 배열로 새로운 Students배열을 set한다
  }

  return (
    <>
      <div className='App'>
        <Header />
        <Editor addStudent={addStudent}/>
   
        <List students={students} onClickDelete={onClickDelete}/>
      </div>
    </>
  )
  
}

export default App
