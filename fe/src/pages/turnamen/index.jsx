import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FeatTurnamen from "../../features/Turnamen/Hubungi";
import FeatKontenTurnamen from "../../features/Turnamen/Konten";

const TurnamenPages = () => {
  return (
    <div>
      <Navbar />
      <FeatTurnamen/>
      <FeatKontenTurnamen/>
      <Footer/>
    </div>
  );
};

export default TurnamenPages;
