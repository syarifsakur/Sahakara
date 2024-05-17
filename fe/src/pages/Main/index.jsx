import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Main from "../../features/Beranda/Main";
import Main2 from "../../features/Beranda/Main2";
import Main3 from "../../features/Beranda/Main3";

import Main4 from "../../features/Beranda/Main4";

const MainPages = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Main2/>
      <Main3/>
      <Main4 />
      <Footer/>
    </div>
  );
};

export default MainPages;
