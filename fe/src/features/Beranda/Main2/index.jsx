import CardMain2 from "../../../components/card/Main2"
import lapangan from "../../../assets/football.svg"
import protect from "../../../assets/protect.svg"
import welfare from "../../../assets/welfare.svg"
import bestprice from "../../../assets/best-price.svg"
import Button from "../../../components/Button"
const Main2 = () => {
  return (
    <div className=" h-lvh mx-10 my-20 poppins ">
        <h1 className="flex justify-center text-xl lg:text-4xl text-blue-950 font-bold">Kenapa Memilih Lucky Futsal?</h1>
        <div className="flex justify-between mt-20 ">
            <div className="flex lg:flex-wrap lg:max-w-2xl gap-2 lg:gap-10 ">
              <div className="flex flex-col lg:gap-y-10">
                <CardMain2 text="Kualitas Lapangan Unggul" img={lapangan} ></CardMain2>
                <CardMain2 text="Fasilitas Lengkap" img={welfare}  ></CardMain2>
              </div>
              <div className="flex flex-col lg:gap-y-10 lg:mt-20">
                <CardMain2 text="Lingkungan Bersih dan Teratur" img={protect} ></CardMain2>
                <CardMain2 text="Harga Terjangkau" img={bestprice} ></CardMain2>
              </div>
            </div>
            <div className="max-w-40 lg:max-w-[550px] w-[900px] text-sm sm:text-lg text-blue-950 lg:text-2xl flex flex-col justify-between">
                <h1>Karena kami punya lapangan futsal bagus dengan suasana nyaman dan aman. Lapangan selalu bersih dan teratur, plus ada fasilitas lengkap seperti kamar ganti dan toilet yang nyaman. Staf kami juga ramah dan siap bantu kapan pun. Jadi, kalo lagi cari tempat main futsal yang oke, mampir aja ke Lucky Futsal!</h1>

                <Button  className=" bg-blue-950 mt-10 md:mt-20 h-8 md:h-10 lg:h-12 w-40 lg:w-56 text-xs md:text-sm lg:text-lg hover:bg-blue-700 ml-48" text="Booking Sekarang" ></Button>
            </div>
        </div>
    </div>
  )
}
export default Main2
