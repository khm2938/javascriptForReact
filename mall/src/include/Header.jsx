import "./Header.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const loginState = useSelector((state) => state.loginSlice);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 토글 시 드롭다운 상태 변경
    setIsProductDropdownOpen(false); // 토글 시 다른 드롭다운 닫기
  };
  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen); // 토글 시 드롭다운 상태 변경
    setIsDropdownOpen(false); // 토글 시 다른 드롭다운 닫기
  };

  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-link">
              {" "}
              MAIN{" "}
            </Link>
            <Link to="/about" className="nav-link">
              {" "}
              ABOUT{" "}
            </Link>

            {/* 드롭다운 영역 (todo) 회원전용 */}
             {loginState.email ? ( 
            <> 
            <div className="nav-dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                TODO <span className="arrow">▾</span>
              </button>

              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/todo/list" className="nav-link">
                      LIST
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/todo/add" className="nav-link">
                      ADD
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo/read/20" className="nav-link">
                      Read
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/todo/modify/2" className="nav-link">
                      Modify
                    </Link>{" "}
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">예비용</a>
                  </li>
                </ul>
              )}
            </div>
            </> 
          ) : ( 
            <></> 
          )} 

          {/* 드롭다운 영역 (product) 회원전용 */}
          {loginState.email ? (
           <>
            <div className="nav-dropdown">
              <button className="dropdown-toggle" onClick={toggleProductDropdown}>
                PRODUCT <span className="arrow">▾</span>
              </button>
              {isProductDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/product/list" className="nav-link">
                      LIST
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/product/add" className="nav-link">
                      ADD
                    </Link>
                  </li>
                  <li>
                    <Link to="/product/read/20" className="nav-link">
                      Read
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/product/modify/2" className="nav-link">
                      Modify
                    </Link>{" "}
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">예비용</a>
                  </li>
                </ul>
              )}
            </div>
             </> 
          ) : ( 
            <></> 
          )} 
          </div>
          <div className="nav-right">
           {!loginState.email ? ( 
            <Link to="/member/login" className="login-link"> 
              Login 
            </Link> 
          ) : ( 
            <Link to="/member/logout" className="login-link"> 
              Logout 
            </Link> 
          )} 
          </div>
        </div>
      </nav>
    </>
  );
}
