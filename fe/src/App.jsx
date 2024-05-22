import MainPages from "./pages/Main"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./pages/Register"
import Jadwal from "./pages/Jadwal";
import LokasiPages from "./pages/lokasi";
import BlogPages from "./pages/blog";
import TurnamenPages from "./pages/turnamen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Jadwal" element={<Jadwal/>} />
        <Route path="/Lokasi" element={<LokasiPages/>} />
        <Route path="/Blog" element={<BlogPages/>} />
        <Route path="/Turnamen" element={<TurnamenPages/>} />
      </Routes>
    </BrowserRouter>
    
  )
  }

export default App
