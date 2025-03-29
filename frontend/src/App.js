import Format from './components/Format.css'
import { Routes, Route } from "react-router-dom"

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element= {<Login />} />
        <Route path='/register' element= {<Register />} />
      </Routes>
    </div>
  )
}

export default App;
