import { useContext, useState, useMemo, useEffect } from "react";
import { login, logout } from "../api/authApi";
import { BoardStateContext } from "../contexts/BoardStateContext";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";
import Button from "../components/Button";
import BoardList from "../components/BoardList";

const Home = () => {
  // 전역 상태 가져오기
  const boards = useContext(BoardStateContext);
  const nav = useNavigate();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("NEW");
  // ===== 로그인 UI 상태 =====
  const [loginForm, setLoginForm] = useState({
    username: "member",
    password: "1234",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMsg, setLoginMsg] = useState("");

  const onChangeLoginForm = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitLogin = async (e) => {
    e.preventDefault();
    setLoginMsg("");
    try {
      await login(loginForm.username, loginForm.password);
      setIsLoggedIn(true);
      setLoginMsg("로그인 성공");
    } catch (err) {
      setIsLoggedIn(false);
      setLoginMsg("로그인 실패 (아이디/비번 확인)");
      console.log(err);
    }
  };

  const onClickLogout = async () => {
    setLoginMsg("");
    try {
      await logout();
      setIsLoggedIn(false);
      setLoginMsg("로그아웃 완료");
    } catch (err) {
      console.log(err);
      setLoginMsg("로그아웃 실패");
    }
  };

  // 카테고리 필터
  const filteredBoards = useMemo(() => {
    return categoryFilter === "ALL"
      ? boards
      : boards.filter((b) => b.category === categoryFilter);
  }, [boards, categoryFilter]);

  // 검색 필터
  const searchedBoards = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (keyword === "") return filteredBoards;

    return filteredBoards.filter((b) => {
      return (
        (b.title ?? "").toLowerCase().includes(keyword) ||
        (b.summary ?? "").toLowerCase().includes(keyword) ||
        (b.content ?? "").toLowerCase().includes(keyword)
      );
    });
  }, [filteredBoards, search]);

  // 정렬(최신/오래된)
  const sortedBoards = useMemo(() => {
    return [...searchedBoards].sort((a, b) => {
      const aTime = a.createdAt
        ? new Date(a.createdAt).getTime()
        : Number(a.createdDate ?? 0);

      const bTime = b.createdAt
        ? new Date(b.createdAt).getTime()
        : Number(b.createdDate ?? 0);

      return sortOrder === "NEW" ? bTime - aTime : aTime - bTime;
    });
  }, [searchedBoards, sortOrder]);

  // 초기화
  const handleReset = () => {
    setCategoryFilter("ALL");
    setSearch("");
    setSortOrder("NEW");
  };

  // 상태 표시 문구
  const statusText = [
    categoryFilter !== "ALL" ? `카테고리: ${categoryFilter}` : null,
    search.trim() !== "" ? `검색: "${search.trim()}"` : null,
    sortOrder === "NEW" ? "정렬: 최신순" : "정렬: 오래된순",
  ]
    .filter(Boolean)
    .join(" / ");

  return (
    <div className="home-container">
      <div className="home-inner">
        {/* 헤더 */}
        <div className="home-header">
          <h1 className="home-title">개발 학습 기록</h1>
        </div>

        {/* 상단 툴바(카테고리/검색/글작성) */}
        <div className="home-toolbar-card">
          <div className="home-toolbar-row">
            <select
              className="home-select"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="ALL">전체</option>
              <option value="Java">Java</option>
              <option value="React">React</option>
              <option value="Spring">Spring</option>
              <option value="DB">DB</option>
              <option value="CS">CS</option>
              <option value="ETC">ETC</option>
            </select>

            <input
              className="home-search"
              placeholder="검색 (제목/요약/내용)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="home-write">
              <Button
                text="글 작성"
                onClick={() => {
                  if (!isLoggedIn) {
                    alert("로그인이 필요합니다.");
                    return;
                  }
                  nav("/new");
                }}
              />
            </div>
          </div>
        </div>

        <div className="home-layout">
          {/* LEFT - Main */}
          <section className="home-main">
            {/* 정렬바: Main 위쪽 */}
            <div className="home-mainTop">
              <button
                className="home-sort-btn"
                onClick={() => setSortOrder(sortOrder === "NEW" ? "OLD" : "NEW")}
              >
                {sortOrder === "NEW" ? "최신순" : "오래된순"}
              </button>

              <div className="home-status">{statusText}</div>

              <button className="home-reset-btn" onClick={handleReset}>
                초기화
              </button>
            </div>

            {/* 리스트: Main 아래쪽 */}
            <div className="home-mainList">
              <BoardList
                boards={sortedBoards}
                onClickItem={(id) => nav(`/detail/${id}`)}
              />
            </div>
          </section>

          {/* RIGHT - Aside */}
          <aside className="home-aside">
            <div className="aside-card">
              <div className="aside-title">요약</div>
              <div className="aside-text">
                전체 글: {boards.length}개
                <br />
                현재 결과: {sortedBoards.length}개
              </div>
            </div>
            {/* 로그인 카드(요약 아래) */}
            <div className="aside-card" style={{ marginTop: 16 }}>
              <div className="aside-title">로그인</div>

              {!isLoggedIn ? (
                <form onSubmit={onSubmitLogin}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <input
                      name="username"
                      value={loginForm.username}
                      onChange={onChangeLoginForm}
                      placeholder="아이디"
                      style={{ padding: "10px", borderRadius: 10, border: "1px solid #ddd" }}
                    />
                    <input
                      name="password"
                      type="password"
                      value={loginForm.password}
                      onChange={onChangeLoginForm}
                      placeholder="비밀번호"
                      style={{ padding: "10px", borderRadius: 10, border: "1px solid #ddd" }}
                    />

                    <button
                      type="submit"
                      style={{
                        padding: "10px",
                        borderRadius: 10,
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 700,
                      }}
                    >
                      로그인
                    </button>

                    {loginMsg && (
                      <div style={{ fontSize: 13, opacity: 0.8 }}>{loginMsg}</div>
                    )}
                  </div>
                </form>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ fontSize: 14 }}>
                    <b>{loginForm.username}</b> 님 로그인 상태
                  </div>

                  <button
                    type="button"
                    onClick={onClickLogout}
                    style={{
                      padding: "10px",
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    로그아웃
                  </button>

                  {loginMsg && (
                    <div style={{ fontSize: 13, opacity: 0.8 }}>{loginMsg}</div>
                  )}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Home;
