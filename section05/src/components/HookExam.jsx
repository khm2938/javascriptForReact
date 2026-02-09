import {useState} from 'react';

function useInput(){
  const [input, setInput] = useState("");
  const onChange = (e)=>{
    setInput(e.target.value);
  }
  return [input, onChange]
}

const HookExam = () => {
   const [input, onChange] = useInput();
   const [input2, onChange2] = useInput();

    return (<div>
        <input type="text" value={input} onChange={onChange}/>
        <input type="text" value={input2} onChange={onChange2}/>
    </div>);
};

export default HookExam;