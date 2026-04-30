import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Signin from './pages/sigin'



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
