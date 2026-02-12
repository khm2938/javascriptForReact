import Header from "./Header";
import Button from "./Button";
import DiaryList from "./DiaryList";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";

const Home = () => {
  //공유props 가져오기
  const state = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  //이전달, 다음달 이벤트처리
  const onDecreaseMonth = (e)=>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }
  const onIncreaseMonth = (e)=>{
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }

  //해당달에 해당되는 일기만 필터링
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23, 59, 59).getTime();
  const monthlyData = state.filter((item)=>item.createdDate >= beginTime && item.createdDate <= endTime)

    
    return <>
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
            leftChild={<Button text={"<이전달"} onClick={onDecreaseMonth} />}
            rightChild={<Button text={"다음달>"} onClick={onIncreaseMonth} />}
        />

        <DiaryList monthlyData={monthlyData}/>

    </>
}

export default Home;