import { getEmotionImage } from "../util/getEmotionImage";
import { useContext, useMemo } from "react";
import "./Viewer.css"; 
import { DiaryStateContext } from "../App";
import { useParams } from "react-router-dom";

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





const Viewer = ({emotionId, content})=>{
  
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId))

  return<>
   <div className="Viewer"> 
      <section className="img_section"> 
        <h4>오늘의 감정</h4> 
        <div className = "emotion_img_wrapper">
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section> 
      <section className="content_section"> 
        <h4>오늘의 일기</h4> 
        <div className="content_wrapper"> 
          <p>{content}</p> 
        </div> 
      </section> 
    </div>
  </>
}
export default Viewer;