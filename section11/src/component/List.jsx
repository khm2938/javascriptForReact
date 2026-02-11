import { useMemo, useState } from 'react';
import '../css/List.css'
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete}) => { 
  const [search, setSearch] = useState(''); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value); 
  }; 
 
    //주의바람
    const getFilterData = ()=>{
        if(search === ''){
            return todos;
        }
        return todos.filter((todo)=>{
            return todo.content.toLowerCase().includes(search.toLowerCase())
        })
    }
    //전체리스트갯수, 완료된갯수, 미완료된 갯수
     const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
      console.log("전체개수");
      let totalCount = todos.length;
      let doneCount = todos.filter((todo)=> todo.isDone === true).length
      let notDoneCount = totalCount - doneCount
      return {totalCount, doneCount, notDoneCount};
    },[todos])

    const filteredTodos = getFilterData();
   

  return (
  <div className="List">
    <h4>Todo List</h4>
    <div>
      <p>total: {totalCount}</p>
      <p>done: {doneCount}</p>
      <p>not done: {notDoneCount}</p>
    </div>
    <input
      value={search}
      onChange={onChangeSearch}
      placeholder="검색어를 입력하세요..."
    />

    <div className="todos_wrapper">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
      ))}
    </div>
  </div>
);

}; 
 
export default List; 