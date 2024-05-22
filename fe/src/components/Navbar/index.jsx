import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
import hamburger from "../../assets/hamburger.svg"
import { useState } from "react";

const Navbar = () => {
  const activeLinkClass = 'text-red-500';
  const location = useLocation()

  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  }

  const handlerClose = (
    <img
      src={hamburger}
      alt=""
      className="sm:hidden w-6  h-6 hover:cursor-pointer"
      onClick={toggleMobile}
    />
  );

  const handlerOpen = (
    <>
    <img
    src={hamburger}
    alt=""
    className="sm:hidden w-6  h-6 hover:cursor-pointer"
    onClick={toggleMobile}
  />
  <div className="sm:hidden sticky top-0  bg-blue-950 -mr-20 -ml-[200px] px-5 py-4 gap-2 mt-2"> 
    <ul className="  text-xl flex flex-col items-start ">
      <li><a href="/" className={location.pathname === '/' ? activeLinkClass : ''}>Beranda</a></li>
      <li><a href="/jadwal" className={location.pathname === '/jadwal' ? activeLinkClass : ''}>Jadwal &amp; Harga</a></li>
      <li><a href="/lokasi" className={location.pathname === '/lokasi' ? activeLinkClass : ''}>Lokasi</a></li>
      <li><a href="http://wa.me/6282235059316">Kontak</a></li>
      <li><a href="/blog" className={location.pathname === '/blog' ? activeLinkClass : ''}>Blog</a></li>
      <li><a href="/turnamen" className={location.pathname === '/turnamen' ? activeLinkClass : ''}>Turnamen</a></li>
    </ul>
    </div>

</>
  )


  return (
    <>
      <div className="flex bg-blue-950 z-10 sticky top-0 right-0 shadow-xl">
        <div className="w-full mx-10 h-10 lg:h-16  text-white poppins font-bold text-3xl flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <img src={logo} alt="logo" className="h-6 md:h-10 lg:h-[40px] sm:h-8" />
            <h1 className="text-xs lg:text-2xl md:text-2xl sm:text-sm">Lucky Futsal</h1>
          </div>
          <div className="flex items-center">
            <button className="mD:hidden w-6  h-6" onClick={toggleMobile}>
              {isMobile ? handlerOpen : handlerClose }
            </button>
            <ul className="hidden sm:flex justify-center items-center h-14 gap-x-4 lg:gap-x-12 text-xs lg:text-xl md:text-base sm:text-sm">
              <li><a href="/" className={location.pathname === '/' ? activeLinkClass : ''}>Beranda</a></li>
              <li><a href="/jadwal" className={location.pathname === '/jadwal' ? activeLinkClass : ''}>Jadwal &amp; Harga</a></li>
              <li><a href="/lokasi" className={location.pathname === '/lokasi' ? activeLinkClass : ''}>Lokasi</a></li>
              <li><a href="http://wa.me/628115811212">Kontak</a></li>
              <li><a href="/blog" className={location.pathname === '/blog' ? activeLinkClass : ''}>Blog</a></li>
              <li><a href="/turnamen" className={location.pathname === '/turnamen' || location.pathname==='/turnamen/detail' ? activeLinkClass : ''}>Turnamen</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;