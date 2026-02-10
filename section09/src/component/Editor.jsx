import { useState } from "react";

function Editor({ addStudent }) {

  const [name,setName] = useState('');
  const [kor,setKor] = useState(0);
  const [eng,setEng] = useState(0);
  const [mat,setMat] = useState(0);

  const onChangeName = (e)=>{
    setName(e.target.value);
  }
  const onChangeKor = (e)=>{
    setKor(e.target.value);
  }
  const onChangeEng = (e)=>{
    setEng(e.target.value);
  }
  const onChangeMat = (e)=>{
    setMat(e.target.value);
  }
  
  return <div className="editor">
    <input onChange={onChangeName} type="text" name="name" id="name" placeholder="이름을 입력하세요" required/>
    <input onChange={onChangeKor} type="text" name="kor" id="kor" placeholder="국어성적을 입력하세요(0~100)" required/>
    <input onChange={onChangeEng} type="text" name="eng" id="eng" placeholder="영어성적을 입력하세요" required/>
    <input onChange={onChangeMat} type="text" name="mat" id="mat" placeholder="수학성적을 입력하세요" required/>
    <button onClick={()=>addStudent(name,kor,eng,mat)} type="button">등록</button>
  </div>;
}

export default Editor;