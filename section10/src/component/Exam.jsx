import { useReducer, useState } from "react";


function reducer(count1, action) {
  switch (action.type) {
    case "PLUS":
      return count1 + Number(action.data);
    case "MINUS":
      return count1 - Number(action.data);
    default:
      return count1 ;
  }
}

const Exam = () => {
  const [count1, dispatch] = useReducer(reducer, 0);
  const [count, setCount] = useState(0);

  const onClickPlus = (e)=>{
    dispatch({type: "PLUS", data: e.target.value})
  }

  const onClickMinus = (e)=>{
    dispatch({type: "MINUS", data: e.target.value})
  }
  

  return<>
    <div>
      <h1>{count1}</h1>
      <button type="button" onClick={onClickPlus} value={2}>+</button>
      <button type="button" onClick={onClickMinus} value={3}>-</button>
    </div>
  </>
}
export default Exam;