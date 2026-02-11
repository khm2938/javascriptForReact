import '../css/TodoItem.css'
import { memo } from 'react';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
    const onChangeIsDone = (e) => {
        onUpdate(id);
    };
    const onClickDelete = ()=>{
        onDelete(id)
    }

    return (
        <div className="TodoItem">
            <input 
                type="checkbox" 
                checked={isDone}
                onChange={onChangeIsDone} 
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
};

export default memo(TodoItem)