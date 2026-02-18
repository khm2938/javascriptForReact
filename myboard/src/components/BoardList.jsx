import BoardItem from "./BoardItem";
import "../css/BoardList.css";

const BoardList = ({ boards, onClickItem }) => {
  if (!boards || boards.length === 0) {
    return <div className="boardlist-empty">글이 없습니다.</div>;
  }

  return (
    <ul className="boardlist">
      {boards.map((board) => (
        <BoardItem
          key={board.id}
          board={board}
          onClick={() => onClickItem(board.id)}
        />
      ))}
    </ul>
  );
};

export default BoardList;
