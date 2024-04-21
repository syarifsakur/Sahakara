import Button from "../../components/Button"
import Navbar from "../../components/layout/Navbar"

const Main = () => {
  return (
    <>
        <Navbar/>

        <div className={`flex mt-20 h-96 justify-center items-center flex-col gap-y-16 bg-[url("e:/belajar/fullstack/fe/src/assets/img.png")] bg-auto bg-repeat-round mx-7 p-52`}>
          <div className="kata justify-center poppins text-white font-bold items-center text-center text-3xl h-28 mt-6 flex flex-col gap-y-8">
            <h2>GEBRAKAN DI ERA DIGITAL</h2>
            <h2>Memanfaatkan Teknologi Untuk Mempermudah dan Mempercepat Proses Pembookingan lapangan Futsal.</h2>
          </div>
          <div className="button mt-16">
            <Button text="Booking Sekarang" color="blue"></Button>
          </div>
        </div>

    </>
  )
}

export default Main
