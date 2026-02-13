import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Editor.css'

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

//날짜를 문자열로 리턴하는 함수
const getStringDate = (targetDate)=>{
  //yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate()

  //10, 11, 01
  if(month < 10) month = `0${month}`
  if(date < 10) date = `0${date}`
  return `${year}-${month}-${date}`
}

const Editor = ({onSubmit})=>{
  const nav = useNavigate();
  const [createdDate, setCreatedDate] = useState(new Date());
  const [emotionId, setEmotionId] = useState(5);
  const [content, setContent] = useState("");
  

  const onChangeDate = (e)=>{
    setCreatedDate(new Date(e.target.value))
  }

  const onClickEmotionId = (id)=>{
    setEmotionId(id)
  }
  
  const onChangeContent = (e)=>{
    console.log(`content=${e.target.value}`)
    setContent(e.target.value)
  }

  const onSubmitInput =()=>{
    const input = {
      createdDate,
      emotionId,
      content
    }
    onSubmit(input);
  }
  
  return (<>
    <div className="Editor"> 
      <section className="date_section"> 
        <h4>오늘의 날짜</h4> 
        <input type="date"
          name="createdDate" 
          onChange={onChangeDate}
          value={getStringDate(createdDate)}/> 
      </section> 
      <section className="emotion_section"> 
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item)=>{
            return <EmotionItem key={item.emotionId} 
            onClickEmotionId={onClickEmotionId}
            {...item} isSelected={item.emotionId === emotionId}
            />
          })}
        </div> 
      </section> 
      <section className="content_section"> 
        <h4>오늘의 일기</h4> 
        <textarea 
         name="content"
         value={content}
         placeholder="오늘은 어땠나요?" 
         onChange={onChangeContent}
        /> 
      </section> 
      <section className="button_section"> 
        <Button text={"취소하기"} type={"NEGATIVE"} onClick={()=> nav(-1) }/> 
        <Button text={"작성완료"} type={"POSITIVE"} onClick={onSubmitInput} /> 
      </section>
    </div> 
    </>
  ); 
};

export default Editor;