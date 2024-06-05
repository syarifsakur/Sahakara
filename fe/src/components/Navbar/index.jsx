import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import profil from "../../assets/profil.svg";
import hamburger from "../../assets/hamburger.svg";
import { useState } from "react";
import LoginPopup from "../../features/Masuk/Login";
import RegisterPopup from "../../features/Masuk/Register";

const Navbar = () => {
  const activeLinkClass = "text-red-500";
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleLoginClick = () => {
    setShowRegisterPopup(false);
    setShowLoginPopup(true);
  };

  const handleRegisterClick = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(true);
  };

  const handlerClose = (
    <img
      src={hamburger}
      alt=""
      className="sm:hidden w-6 h-6 hover:cursor-pointer"
      onClick={toggleMobile}
    />
  );

  const handlerOpen = (
    <>
      <img
        src={hamburger}
        alt=""
        className="sm:hidden w-6 h-6 hover:cursor-pointer"
        onClick={toggleMobile}
      />
      <div className="md:hidden fixed top-10 left-0 w-full bg-blue-950 p-5 z-20 flex flex-col items-center">
        <ul className="text-sm flex flex-col w-full items-center gap-3">
          <li>
            <a
              href="/"
              className={location.pathname === "/" ? activeLinkClass : ""}
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="/jadwal"
              className={location.pathname === "/jadwal" ? activeLinkClass : ""}
            >
              Jadwal &amp; Harga
            </a>
          </li>
          <li>
            <a
              href="/lokasi"
              className={location.pathname === "/lokasi" ? activeLinkClass : ""}
            >
              Lokasi
            </a>
          </li>
          <li>
            <a href="http://wa.me/6282235059316">Kontak</a>
          </li>
          <li>
            <a
              href="/blog"
              className={location.pathname === "/blog" ? activeLinkClass : ""}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/turnamen"
              className={
                location.pathname === "/turnamen" ? activeLinkClass : ""
              }
            >
              Turnamen
            </a>
          </li>
          <li className="flex flex-row items-center gap-2 mt-4">
            <button
              className="bg-blue-700 hover:bg-red-500 text-white px-3 py-2 rounded text-xs"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <button
              className="bg-blue-700 hover:bg-red-500 text-white px-3 py-2 rounded text-xs"
              onClick={handleRegisterClick}
            >
              Signup
            </button>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div className="flex bg-blue-950 z-10 sticky top-0 right-0 shadow-xl">
        <div className="w-full mx-10 h-10 lg:h-16 text-white poppins font-bold text-3xl flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <a
              href="/"
              className={`flex items-center ${
                location.pathname === "/" 
              }`}
            >
              <img
                src={logo}
                alt="logo"
                className="h-6 md:h-10 lg:h-[40px] sm:h-8"
              />
              <h1 className="text-xs lg:text-2xl md:text-2xl sm:text-sm ml-2">
                Lucky Futsal
              </h1>
            </a>
          </div>
          <div className="flex items-center">
            <button className="sm:hidden w-6 h-6" onClick={toggleMobile}>
              {isMobile ? handlerOpen : handlerClose}
            </button>
            <ul className="hidden sm:flex justify-center items-center h-14 gap-x-4 lg:gap-x-12 text-xs lg:text-xl md:text-base sm:text-sm">
              <li>
                <a
                  href="/"
                  className={location.pathname === "/" ? activeLinkClass : ""}
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/jadwal"
                  className={
                    location.pathname === "/jadwal" ? activeLinkClass : ""
                  }
                >
                  Jadwal & Harga
                </a>
              </li>
              <li>
                <a
                  href="/lokasi"
                  className={
                    location.pathname === "/lokasi" ? activeLinkClass : ""
                  }
                >
                  Lokasi
                </a>
              </li>
              <li>
                <a href="http://wa.me/628115811212">Kontak</a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={
                    location.pathname === "/blog" ? activeLinkClass : ""
                  }
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/turnamen"
                  className={
                    location.pathname === "/turnamen" ||
                    location.pathname === "/turnamen/detail"
                      ? activeLinkClass
                      : ""
                  }
                >
                  Turnamen
                </a>
              </li>
              <li className="flex flex-col items-center">
                <div className="bg-white rounded-full flex items-center justify-center p-0">
                  <img
                    src={profil}
                    alt="Login Icon"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <a
                  href="#"
                  onClick={handleLoginClick}
                  className={
                    location.pathname === "/profil" ? activeLinkClass : ""
                  }
                >
                  Masuk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          onSignUpClick={handleRegisterClick}
        />
      )}
      {showRegisterPopup && (
        <RegisterPopup
          onClose={() => setShowRegisterPopup(false)}
          onSignInClick={handleLoginClick}
        />
      )}
    </>
  );
};

export default Navbar;
