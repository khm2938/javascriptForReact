import './App.css' 
import { useState } from 'react'
import Bulb from './components/bulb'
import Count from './components/Count'
import Register from './components/Register'; 
 

function App() { 
  return ( 
    <> 
      <Register /> 
    </> 
  ); 
} 
 
export default App;

/*
export default function App() {
  return (
    <>
     <Count />
     <Bulb />
    </>
  )
}
*/




/*

export default function App(){
  
  const [count, setCount] = useState(0);

  let count1 = 0;

  function setCount1(value){
    count1 = value;
  }

  count1 = 10; // 틀린 구문
  setCount1(10) // 맞는 구문
}





export default function App() {
  const obj = [
    {text: '메일', color:"red"},
    {text: '메일2', color:"green"},
    {text: '메일3', color:"blue"},
  ];

  return (
    <button>
      <Button {...obj[0]} />
      <Button {...obj[1]} />
      <Button {...obj[2]}> 
        <div>자식요소</div>
         </Button>
    </button>
  )
}

*/