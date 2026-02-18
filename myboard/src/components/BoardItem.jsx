import "../css/BoardItem.css";

const BoardItem = ({ board, onClick }) => {
  const dateText = new Date(board.createdAt ?? board.createdDate).toLocaleDateString();
  return (
    <li className="boarditem" onClick={onClick}>
      <div className="boarditem-title">{board.title}</div>
      <div className="boarditem-date">{dateText}</div>
      <div className="boarditem-meta">
        <span className="badge category">{board.category}</span>
        <span className="badge level">{board.level}</span>
      </div>
    </li>
  )
}

export default BoardItem;