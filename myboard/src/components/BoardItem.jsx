import "../css/BoardItem.css";
import { makeSummary } from "../utils/makeSummary";

const BoardItem = ({ board, onClick }) => {
  const dateText = new Date(board.createdAt ?? board.createdDate).toLocaleDateString();
  const summaryText = makeSummary(board.content, 80);

  return (
    <li className="boarditem" onClick={onClick}>
      <div className="boarditem-title">{board.title}</div>

      {summaryText !== "" && <div className="boarditem-summary">{summaryText}</div>}

      <div className="boarditem-meta">
        <span className="badge category">{board.category}</span>
        <span className="badge level">{board.level}</span>
        <span className="badge date">{dateText}</span>
      </div>
    </li>
  );
};

export default BoardItem;
