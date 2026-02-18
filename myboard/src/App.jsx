import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import New from "./pages/New";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import { BoardStateContext } from './contexts/BoardStateContext';
import { BoardDispatchContext } from './contexts/BoardDispatchContext';
import { useBoard } from "./hooks/useBoard";



function App() {
  const { state, onCreate, onDelete, onUpdate } = useBoard();

  return (
    <BoardDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
      <BoardStateContext.Provider value={state}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BoardStateContext.Provider>
    </BoardDispatchContext.Provider>
  )
}
export default App
