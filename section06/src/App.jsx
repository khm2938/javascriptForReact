import './App.css'
import { useState } from 'react';
import Viewer from './component/Viewer';

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (e) => { 
    setCount(count + parseInt(e.target.value))
   };
   console.log(`App 리렌더링 ${count}`);
  return (
    // <></>는 React Fragment라고 해서, 불필요한 div 없이 태그들을 묶어줄 때 써!
    <div className="App">
      {/* 제목 */}
      <h1>카운터앱</h1>

      {/* 카운터뷰 */}
      <Viewer count={count}/>

      {/* 카운터 컨트롤러 */}
      <section className="controller">
        <div>
          <button onClick={onClickButton} value={1}>+1</button>
          <button onClick={onClickButton} value={10}>+10</button>
          <button onClick={onClickButton} value={100}>+100</button>
          <button onClick={onClickButton} value={-1}>-1</button>
          <button onClick={onClickButton} value={-10}>-10</button>
          <button onClick={onClickButton} value={-100}>-100</button>
        </div>
      </section>
    </div>
  )
}

export default App