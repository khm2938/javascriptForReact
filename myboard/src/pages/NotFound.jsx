import { useNavigate } from "react-router-dom";

const NotFound = ()=>{
  const nav = useNavigate();

  return<>
    <h1>NotFound</h1>
    <button onClick={()=> nav("/")}>홈으로</button>
  </>
}
export default NotFound;