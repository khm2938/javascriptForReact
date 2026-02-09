import "../css/Sub.css"

const Sub = () => {
  const user = { name: "kdj", isLogin: true };

  if (user.isLogin === true) {
    return<><h1 className="login">{user.name}로그인</h1> </>;
  } else {
    return<><h1 className="logout">{user.name}로그아웃</h1></>;
  }
};
export default Sub;
