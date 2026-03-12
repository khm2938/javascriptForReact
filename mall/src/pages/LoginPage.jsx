import Header from "../include/Header";
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline" >
              Login Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default LoginPage;
