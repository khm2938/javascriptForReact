import Header from "../include/Header";
import './AboutPage.css';

const AboutPage = () => {
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
