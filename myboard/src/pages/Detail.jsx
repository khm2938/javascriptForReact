import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardStateContext } from "../contexts/BoardStateContext";
import { BoardDispatchContext } from "../contexts/BoardDispatchContext";
import "../css/Detail.css";

const Detail = () => {

  const { id } = useParams();
  const nav = useNavigate();

  const boards = useContext(BoardStateContext);
  const { onDelete } = useContext(BoardDispatchContext);

  const board = boards.find(
    (item) => item.id === Number(id)
  );

  const handleDelete = () => {
   
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (!ok) return;

    onDelete(Number(id));
    nav("/", { replace: true });
  };

  if (!board) {
    return (
      <div>
        <h2>글을 찾을 수 없습니다.</h2>
        <button onClick={() => nav("/")}>목록으로</button>
      </div>
    );
  }

  return <>

    <div className="detail-container">
      <div className="detail-meta">
        <span className="badge category">{board.category}</span>
        <span className="badge level">{board.level}</span>

        <span className="detail-date">
          {new Date(board.createdAt).toLocaleDateString()}
        </span>
      </div>

      <h1 className="detail-title">{board.title}</h1>

      <div className="detail-content">
        {board.content}
      </div>

      <div className="detail-actions">
        <button className="detail-btn" onClick={() => nav(`/edit/${id}`)}>수정</button>
        <button className="detail-btn danger" onClick={handleDelete}>삭제</button>
        <button className="detail-btn" onClick={() => nav("/")}>목록</button>
      </div>
    </div>

  </>
}
export default Detail;