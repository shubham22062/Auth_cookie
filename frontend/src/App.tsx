import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Signin from './pages/sigin'

import './App.css'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
