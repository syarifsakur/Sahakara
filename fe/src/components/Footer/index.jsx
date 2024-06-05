import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import yt from "../../assets/yt.svg";
import plus from "../../assets/pluscodes.svg";
import loc from "../../assets/location.svg";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-blue-950">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-10 py-8">
          <div className="flex flex-wrap justify-between">
            <ul className="w-72 mb-6 sm:mb-0">
              <li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6923594937525!2d117.15738607363014!3d-0.4552814995402515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df678bb625d46cd%3A0x40c2f0dd6cf48ce3!2sLucky%20Futsal!5e0!3m2!1sid!2sid!4v1716371741331!5m2!1sid!2sid"
                  className="w-full h-52 border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </li>
            </ul>
            <ul className="w-56 mb-6 sm:mb-0">
              <li className="text-lg font-medium text-white mb-4 relative">
                Address
                <span className="absolute bottom-0 left-0 h-0.5 w-9 bg-white"></span>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-x-3">
                  <img
                    src={loc}
                    alt="logo"
                    className="h-4 md:h-10 lg:h-[40px] sm:h-8"
                  />
                  <p className="text-white opacity-80 text-xs">
                    Jl. Perjuangan No.23, Sempaja Sel., Kec. Samarinda Utara,
                    Kota Samarinda, Kalimantan Timur 75117
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-3">
                  <img
                    src={plus}
                    alt="logo"
                    className="h-4 md:h-10 lg:h-[40px] sm:h-8"
                  />
                  <p className="text-white opacity-80 text-xs">
                    G5V5+VX Sempaja Sel., Kota Samarinda, Kalimantan Timur
                  </p>
                </div>
              </li>
            </ul>
            <ul className="w-56 mb-6 sm:mb-0">
              <li className="text-lg font-medium text-white mb-4 relative">
                Support
                <span className="absolute bottom-0 left-0 h-0.5 w-9 bg-white"></span>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-white opacity-80 text-sm hover:opacity-100 transition-opacity duration-300"
                >
                  Contact
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="#"
                  className="text-white opacity-80 text-sm hover:opacity-100 transition-opacity duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white opacity-80 text-sm hover:opacity-100 transition-opacity duration-300"
                >
                  Report a issue
                </a>
              </li>
            </ul>
            <ul className="w-56  mb-6 sm:mb-0 ">
              <li className="text-lg font-medium text-white mb-4 relative">
                Follow Us
                <span className="absolute bottom-0 left-0 h-0.5 w-9 bg-white"></span>
              </li>
              <div className="flex gap-4">
                <li className="mb-1 ">
                  <a
                    href="#"
                    className="text-white opacity-80 text-sm hover:opacity-100 transition-opacity duration-300"
                  >
                    <img src={fb} alt="Fb" className="w-8 h-8 " />
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white opacity-80 text-sm hover:opacity-100 transition-opacity duration-300"
                  >
                    <img src={ig} alt="Ig" className="w-8 h-8" />
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="text-white opacity-80 text-sm hover:opacity-100 transition-opacity duration-300"
                  >
                    <img src={yt} alt="Yt" className="w-8 h-8" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-indigo-950">
        <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between">
          <span className="text-sm text-white opacity-80">
            Copyright &#xA9; 2024{" "}
            <a href="#" className="hover:opacity-100 hover:underline">
              Sahakara.
            </a>{" "}
            All rights reserved
          </span>
          <span className="text-sm text-white opacity-80 space-x-4">
            <a href="#" className="hover:opacity-100 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 hover:underline">
              Terms & Condition
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
