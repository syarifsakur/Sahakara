import MainPages from "./pages/Main"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Jadwal from "./pages/Jadwal";
import LokasiPages from "./pages/lokasi";
import BlogPages from "./pages/blog";
import TurnamenPages from "./pages/turnamen";
import DetailTurnamen from "./pages/DetailTurnamen";
import Profil from "./features/Masuk/Profil";
import DetailBlog from "./pages/detailBlog";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages/>}/>
        <Route path="/Jadwal" element={<Jadwal/>} />
        <Route path="/Lokasi" element={<LokasiPages/>} />
        <Route path="/Blog" element={<BlogPages/>} />
        <Route path="/Blog/detail/:id" element={<DetailBlog/>}/>
        <Route path="/Turnamen" element={<TurnamenPages/>} />
        <Route path="/Turnamen/Detail/:id" element={<DetailTurnamen/>} />
        <Route path="/profil" element={<Profil/>}/>
      </Routes>
    </BrowserRouter>
    
  )
  }

export default App
