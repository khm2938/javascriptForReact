import Button from "./Button";
import Editor from "./Editor";
import Header from "./Header";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  //버튼전송
  const onSubmit = (input)=>{
    onCreate(input.createdDate.getTime(), input.emotionId, input.content)
    //뒤로가기 방지
    nav("/",{replace:true})
  }

  return (
    <>
      <div>
        <Header 
          title={"새일기 쓰기"}
          leftChild={<Button text={"<뒤로가기"} onClick={(e)=>nav(-1)}></Button>}
        />
      </div>
      <Editor onSubmit={onSubmit} />
    </>
  );
};

export default New;
