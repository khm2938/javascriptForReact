import "../css/Sub.css"

//props + 구조분해할당 + 기본값 + jsx스타일링
const Button = ({text, color="black"}, children) => {
  //이벤트처리기능 핸들러함수(3가지 : 함수선언,함수표현,화살표함수)
  const onClickButton = (e)=>{ 
    alert(`${text} + ${color}`) 
    //중요한지점!
    console.log(e);
  }

    return <>
      <button onClick={onClickButton} style={{color: color}} type="button">{text}-{color.toUpperCase()}{children}</button>
    </>

};
export default Button;
