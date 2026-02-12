import { useState, useRef, useEffect } from "react";
import "../css/StudentItem.css";

function StudentItem({ id, name, kor, eng, mat, keyword,  editingId, setEditingId, onClickDelete, onUpdateStudent }) {
  const total = Number(kor) + Number(eng) + Number(mat);
  const avg = (total / 3).toFixed(1);
  const isLow = Number(avg) < 60;
  const isEditing = editingId === id;

  // 수정 상태
  const [editKor, setEditKor] = useState("");
  const [editEng, setEditEng] = useState("");
  const [editMat, setEditMat] = useState("");
  const [error, setError] = useState(""); // 에러 메시지 state

  // 포커스
  const korInputRef = useRef(null);
  useEffect(() => {
    if (isEditing) korInputRef.current?.focus();
  }, [isEditing]);

  //수정 시작시 에러/입력값 초기화
  const onClickEdit = () => {
    if (editingId !== null && editingId !== id) return;

     setError("");
     setEditKor("");
     setEditEng("");
     setEditMat("");

     setEditingId(id); // 수정 시작
  };

  // 입력값을 최종 점수로 확정(빈값->기존값 유지, 0~100 검증)
  const getNextScore = (inputValue, prevValue, subjectName) => {
    // 1) 빈칸이면 기존값 사용
    const raw = inputValue === "" ? String(prevValue) : inputValue;

    // 2) 숫자로 변환
    const num = Number(raw);

    // 3) 검증
    const ok =
      Number.isFinite(num) &&
      Number.isInteger(num) &&
      num >= 0 &&
      num <= 100;

    if (!ok) {
      setError(`${subjectName} 점수는 0~100 사이의 정수만 입력 가능합니다.`);
      return null; // 실패 신호
    }

    return num; // 성공 시 숫자 반환
  };

  //수정정보 저장 함수
  const onClickSave = () => {
    // 에러 초기화
    setError("");

    const nextKorNum = getNextScore(editKor, kor, "국어");
    if (nextKorNum === null) return;
    const nextEngNum = getNextScore(editEng, eng, "영어");
    if (nextEngNum === null) return;
    const nextMatNum = getNextScore(editMat, mat, "수학");
    if (nextMatNum === null) return;

    // 실제 업데이트
    onUpdateStudent(id, {
      kor: nextKorNum,
      eng: nextEngNum,
      mat: nextMatNum,
    });
    // 수정모드 종료 + 입력 초기화
    setEditingId(null);
    setEditKor("");
    setEditEng("");
    setEditMat("");
  };

  //수정 취소
  const onClickCancel = () => {
    // 입력값 초기화
    setEditKor("");
    setEditEng("");
    setEditMat("");

    setError("");        // (에러 state 만들었으면) 에러도 초기화
    setEditingId(null); // 수정모드 종료
  };

  //삭제 컨펌 메시지
  const onClickDeleteConfirm = (id) => {
    if (window.confirm("정말 삭제할까요?")) onClickDelete(id);
  };

  // 검색 키워드 하이라이트
  function highlight(text, kw) {
    if (!kw) return text;
    const idx = text.indexOf(kw);
    if (idx === -1) return text;

    return (
      <>
        {text.slice(0, idx)}
        <mark className="hl">{text.slice(idx, idx + kw.length)}</mark>
        {text.slice(idx + kw.length)}
      </>
    );
  }

  return (
    <>
      <tr className="row">
        <td className="cell-id">{id}</td>
        <td className="cell-name">{highlight(name, keyword)}</td>

        <td className="cell-score">
          {isEditing ? (
            <input
              ref={korInputRef}
              type="number"
              min={0}
              max={100}
              value={editKor}
              onChange={(e) => setEditKor(e.target.value)}
              placeholder={kor}
            />
          ) : (
            kor
          )}
        </td>

        <td className="cell-score">
          {isEditing ? (
            <input
              type="number"
              min={0}
              max={100}
              value={editEng}
              onChange={(e) => setEditEng(e.target.value)}
              placeholder={eng}
            />
          ) : (
            eng
          )}
        </td>

        <td className="cell-score">
          {isEditing ? (
            <input
              type="number"
              min={0}
              max={100}
              value={editMat}
              onChange={(e) => setEditMat(e.target.value)}
              placeholder={mat}
            />
          ) : (
            mat
          )}
        </td>

        <td className="cell-total">{total}</td>
        <td className={`cell-avg ${isLow ? "bad" : ""}`}>{avg}</td>

        <td className="cell-action">
          <div className="action-wrap">
            {isEditing ? (
              <>
                <button
                  type="button"
                  className="btn primary"
                  onClick={onClickSave}
                >
                  저장
                </button>

                <button
                  type="button"
                  className="btn"
                  onClick={onClickCancel}
                >
                  취소
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn"
                  onClick={onClickEdit}
                  disabled={editingId !== null && editingId !== id}  // 다른 학생 수정중이면 잠금
                >
                  수정
                </button>

                <button
                  type="button"
                  className="btn danger"
                  disabled={editingId !== null}  // 수정 중에는 삭제 금지
                  onClick={() => onClickDeleteConfirm(id)}
                >
                  삭제
                </button>
              </>
            )}
          </div>
        </td>

      </tr>

      {/* 에러 메시지: 테이블 아래 한 줄로 보여주기 */}
      {error && (
        <tr className="row-error">
          <td colSpan={9} className="error">
            {error}
          </td>
        </tr>
      )}
    </>
  );
}

export default StudentItem;
