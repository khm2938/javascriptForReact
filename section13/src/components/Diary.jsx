import Header from "./Header";
import Button from "./Button";
import Viewer from "./Viewer";
import { useParams ,useNavigate} from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useContext, useMemo } from "react";

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

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(params.id));
  }, [data, params.id]); // data나 id가 바뀔 때만 다시 계산

// 데이터가 로드될 때까지 렌더링 방어
if (!curDiaryItem) {
  return <div>데이터를 불러오는 중입니다...</div>;
}
const title = getStringDate(new Date(curDiaryItem.createdDate))

  return (
    <>
      <Header
        title={`${title} 기록된 일기장`}
        leftChild={<Button text={"<뒤로가기"} onClick={()=>nav(-1)}/>}
        rightChild= {<Button text={"수정하기"} onClick={()=>nav(`/edit/${params.id}`)}/> }
      />
      <Viewer emotionId={curDiaryItem.emotionId} content={curDiaryItem.content}/>
    </>
  );
};
export default Diary;
