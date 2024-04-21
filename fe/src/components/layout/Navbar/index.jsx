import logo from "../../../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div  className="bg-blue-950 h-16 text-white poppins font-bold text-xl shadow-xl flex justify-between fixed top-0 right-0 left-0">
    <div className="flex items-center gap-x-2">
        <img src={logo} alt="logo" className="h-12 ml-10" />
        <h1>Lucky Futsal</h1>
      </div>
      <div className="mr-10 flex items-center">
                  <ul className=" flex justify-center items-center h-14 gap-x-12">
                    <li ><a href="">Beranda</a></li>
                    <li ><a href="">Jadwal & Harga</a></li>
                    <li ><a href="">Lokasi</a></li>
                    <li ><a href="">Kontak</a></li>
                </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar
