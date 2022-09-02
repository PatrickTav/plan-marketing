
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { News, Home } from './pages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/#news' element={<News/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
