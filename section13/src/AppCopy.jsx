import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Notfound from './components/Notfound'
import Edit from './components/Edit'
function App() {

  return (
    <>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new/:id' element={<New />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/*' element={<Notfound />} />

      </Routes>

    </>
  )
}

export default App
