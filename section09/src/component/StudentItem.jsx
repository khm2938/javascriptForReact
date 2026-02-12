function StudentItem({ id, name, kor, eng, mat, keyword, onClickDelete }) {
  const total = Number(kor) + Number(eng) + Number(mat);
  const avg = (total / 3).toFixed(1);
  const isLow = Number(avg) < 60;

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
    <li className="student">
      <div className="student-main">
        <div className="student-name">{highlight(name, keyword)}</div>
        <div className="student-scores">
          <span>국어 {kor}</span>
          <span>영어 {eng}</span>
          <span>수학 {mat}</span>
        </div>
      </div>

      <div className="student-meta">
        <span className="student-total">총점 {total}</span>
        <span className={`student-avg ${isLow ? "bad" : ""}`}>평균 {avg}</span>
        <button onClick={() => onClickDelete(id)} type="button">삭제</button>
      </div>
    </li>
  );
}
export default StudentItem;
