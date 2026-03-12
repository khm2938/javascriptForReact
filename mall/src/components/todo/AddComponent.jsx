import { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/todoApi";
import InfoModal from "../common/InfoModal"
import "./AddComponent.css";

//초기값
const initState = {
  title: "",
  writer: "",
  complete: false,
  dueDate: "",
};

export default function AddComponent() {
  const [todo, setTodo] = useState({ ...initState }); // 입력값 상태 변화
  const [result, setResult] = useState(null); // API 서버에 저장된 번호
  const [infoModalOn, setInfoModalOn] = useState(false); // 모달창 isShow
  const { moveToList } = useCustomMove();

  // 입력값 변경 핸들러 (객체 불변성을 지키며 업데이트)
  const handleChangeTodo = (e) => {
    setTodo({
      ...todo, // 기존 데이터
      [e.target.name]: e.target.value, // 입력값 데이터 추가
    });
  };

  const handleClickAdd = () => {
    postAdd(todo)
      .then((data) => {
        console.log(data);
        //데이터메시지를 보여주는 모달창
        setResult(data.TNO); // 결과값 저장
        setInfoModalOn(true); // 모달 오픈
        setTodo({ ...initState }); //입력필드 초기화
      })
      .catch((e) => console.error(e));
  };

  const closeModal = () => {
    setInfoModalOn(false); // 모달창 close
    moveToList(); // 목록으로 이동
  };

  return (
    <div className="add-container">
      {/* 등록 완료 알림 모달 */}
      <InfoModal
        show={infoModalOn}
        title={`ADD RESULT`}
        content={`New ${result} 저장완료`}
        callbackFn={closeModal}
      />

      <div className="form-wrapper">
        <div className="form-group">
          <label className="form-label">TITLE</label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
            placeholder="Enter Title"
          />
        </div>

        <div className="form-group">
          <label className="form-label">WRITER</label>
          <input
            className="form-control"
            name="writer"
            type="text"
            value={todo.writer}
            onChange={handleChangeTodo}
            placeholder="Enter Writer"
          />
        </div>

        <div className="form-group">
          <label className="form-label">DUEDATE</label>
          <input
            className="form-control"
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
          />
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-save" type="button" onClick={handleClickAdd}>
          저장
        </button>
        <button
          className="btn btn-list"
          type="button"
          onClick={() => moveToList({ page: 1, size: 10 })}
        >
          목록
        </button>
      </div>
    </div>
  );
}
