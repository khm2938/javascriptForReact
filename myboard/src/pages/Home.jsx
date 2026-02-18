import { useContext, useState } from "react";
import { BoardStateContext } from "../contexts/BoardStateContext";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import Button from "../components/Button";
import BoardList from "../components/BoardList";


const Home = () => {
  //전역 상태 가져오기
  const boards = useContext(BoardStateContext);
  const nav = useNavigate();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("NEW");

  // 카테고리 필터
  const filteredBoards =
    categoryFilter === "ALL"
      ? boards
      : boards.filter((b) => b.category === categoryFilter);

  // 검색 로직
  const searchedBoards = filteredBoards.filter((b) => {
    const keyword = search.trim().toLowerCase();
    if (keyword === "") return true;

    return (
      b.title.toLowerCase().includes(keyword) ||
      b.summary.toLowerCase().includes(keyword) ||
      b.content.toLowerCase().includes(keyword)
    );
  });

  // 정렬 로직(NEW/OLD)
  const sortedBoards = [...searchedBoards].sort((a, b) => {
    const aTime = Number(a.createdAt ?? 0);
    const bTime = Number(b.createdAt ?? 0);

    return sortOrder === "NEW" 
      ? bTime - aTime 
      : aTime - bTime;
});
console.log("sortOrder:", sortOrder);
console.log(sortedBoards.map(b => ({ id: b.id, createdAt: b.createdAt })));

  return (
    <div className="home-container">
      <h1 className="home-title">개발 학습 기록</h1>

      <Button text="글 작성" onClick={() => nav("/new")} />
      <select
        className="home-select"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="ALL">전체</option>
        <option value="Java">자바</option>
        <option value="React">리액트</option>
        <option value="Spring">스프링부트</option>
        <option value="DB">DB</option>
        <option value="CS">CS</option>
        <option value="ETC">기타</option>
      </select>

      <input
        className="home-search"
        placeholder="검색 (제목/요약/내용)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="home-sort-btn"
        onClick={() => setSortOrder(sortOrder === "NEW" ? "OLD" : "NEW")}
      >
        {sortOrder === "NEW" ? "최신순" : "오래된순"}
      </button>
      
      <hr />

      <BoardList boards={sortedBoards} onClickItem={(id) => nav(`/detail/${id}`)} />
    </div>
  );
};
export default Home;