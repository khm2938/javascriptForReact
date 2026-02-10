const StudentItem = ({ id, name, kor, eng, mat, onClickDelete }) => {
  const tot = Number(kor) + Number(eng) + Number(mat);
  const avg = (tot/3).toFixed(1);
  const isLow = Number(avg) < 60;

  return(
    <li className={`student ${isLow ? "low" : ""}`}>
      <div className="student-main">
        <span className="student-name"> {name}</span>
        <span className="score">국어: {kor}</span>
        <span className="score">영어: {eng}</span>
        <span className="score">수학: {mat}</span>
      </div>

      <div className="student-meta">
        <span className="tot">총점: {tot}</span>
        <span className="avg">평균: {avg}</span>
        <button type="button" onClick={() => onClickDelete(id)}>
          삭제
        </button>
      </div>
    </li>
  );
};
export default StudentItem;