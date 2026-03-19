import useCustomLogin from "../../hooks/useCustomLogin";
import "./LogoutComponent.css";

export default function LogoutComponent() {
  const { doLogout, moveToPath } = useCustomLogin();

  const handleClickLogout = () => {
    // 로그아웃 처리
    doLogout();
    alert("로그아웃 되었습니다.");
    // 메인 페이지로 이동
    moveToPath("/");

    // 리덕스 로그아웃 액션 실행
    //dispatch(logout());
    // 메인 페이지로 이동하며 히스토리 교체 (뒤로가기 방지)
    //navigate({ pathname: "/" }, { replace: true });
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-header">Logout</div>

        <div className="logout-body">
          <h3 className="logout-title">로그아웃을 진행하시겠습니까?</h3>

          <div className="logout-button-wrapper">
            <button
              className="btn-logout-submit"
              type="button"
              onClick={handleClickLogout}
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
