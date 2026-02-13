import { getEmotionImage } from "../util/getEmotionImage";
import "./EmotionItem.css"

const EmotionItem = ({emotionId, emotionName, isSelected, onClick, onClickEmotionId })=>{

  const onClickId= ()=>{
    onClickEmotionId(emotionId)
  }

  return<>
  <div className={`EmotionItem ${isSelected ? `EmotionItem_on` : ""}`} onClick={onClickId}>
    <img className="emotion_img" src={getEmotionImage(emotionId)} />
    <div className="emotion_name">{emotionName}</div>
  </div>
  </>
}
export default EmotionItem;