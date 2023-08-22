import DashBoard from './Components/DashBoard'
import './App.css'
import EditPage from './Components/EditPage'
import AddPage from './Components/Addpage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
