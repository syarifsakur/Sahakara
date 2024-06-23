import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const LokasiPages = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8 p-4">
        <h2 className="text-3xl text-center font-bold mb-8">
          Lokasi Lucky Futsal
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6923594937525!2d117.15738607363014!3d-0.4552814995402515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df678bb625d46cd%3A0x40c2f0dd6cf48ce3!2sLucky%20Futsal!5e0!3m2!1sid!2sid!4v1716371741331!5m2!1sid!2sid"
            width="80%"
            height="450"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LokasiPages;
