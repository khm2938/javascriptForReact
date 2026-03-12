import Header from "../include/Header";
import "./MainPage.css";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div>
          <Link to={"/todo/list?page=3&size=20"}>List Page
          </Link> <br />
          <a href="/about">A ABOUT PAGE</a>
        </div>

        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button" F>
              Main Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
