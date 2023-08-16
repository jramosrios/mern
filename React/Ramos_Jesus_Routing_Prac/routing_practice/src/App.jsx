import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Word from './components/Word'
import WordAndColor from './components/WordAndColor'
import Num from './components/Num'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<Num />} />
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:background/:textcolor" element={<WordAndColor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
