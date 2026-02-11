import { useRef, useState } from 'react';
import '../css/Editor.css'; 

const Editor = ({onCreate}) => { 
  const [content, setContent] = useState('');
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value)
  };
  const onSubmit = () => {
    if(content === ''){
      inputRef.current.useRef
      return;
    }
    onCreate(content);
    setContent('')
  };
  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onSubmit();
    }
  };

  return ( 
    <div className="Editor"> 
      <input type="text" value={content} 
      ref = {inputRef}
      onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo..." /> 
      <button onClick={onSubmit}>추가</button> 
    </div> 
  ); 
}; 
export default Editor;