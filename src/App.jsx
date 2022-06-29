import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Index from './pages/index/index'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index></Index>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
