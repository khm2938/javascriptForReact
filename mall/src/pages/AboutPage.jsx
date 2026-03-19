import Header from "../include/Header";
import useCustomLogin from "../hooks/useCustomLogin";
import './AboutPage.css';

const AboutPage = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  if(!isLogin){
    alert("로그인이 필요한 페이지입니다.");
    return moveToLoginReturn();
  }
  
  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline" >
              About Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
