import CardMain2 from "../../../components/card/Main2";
import lapangan from "../../../assets/football.svg";
import protect from "../../../assets/protect.svg";
import welfare from "../../../assets/welfare.svg";
import bestprice from "../../../assets/best-price.svg";
import Button from "../../../components/Button";

const Main2 = () => {
  return (
    <div className="mx-4 sm:mx-10 my-20 poppins">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-950 font-bold">
        Kenapa Memilih Lucky Futsal?
      </h1>
      <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-20">
        <div className="flex flex-col lg:flex-wrap lg:w-1/2 gap-4 lg:gap-6 md:w-full md:justify-center md:items-center sm:items-center sm:w-full">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-x-10 lg:gap-y-6 lg:gap-x-6">
            <CardMain2
              text="Kualitas Lapangan Unggul"
              img={lapangan}
              className="transition transform hover:-translate-y-1 hover:scale-105 duration-300"
            />
            <CardMain2
              text="Fasilitas Lengkap"
              img={welfare}
              className="transition transform hover:-translate-y-1 hover:scale-105 duration-300 lg:mt-6"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-x-10 lg:gap-y-6 lg:gap-x-6">
            <CardMain2
              text="Lingkungan Bersih dan Teratur"
              img={protect}
              className="transition transform hover:-translate-y-1 hover:scale-105 duration-300"
            />
            <CardMain2
              text="Harga Terjangkau"
              img={bestprice}
              className="transition transform hover:-translate-y-1 hover:scale-105 duration-300 lg:mt-6"
            />
          </div>
        </div>
        <div className="max-w-full lg:max-w-[550px] w-full text-sm sm:text-lg text-blue-950 lg:text-2xl flex flex-col mt-10 lg:mt-0">
          <h1>
            Karena kami punya lapangan futsal bagus dengan suasana nyaman dan
            aman. Lapangan selalu bersih dan teratur, plus ada fasilitas lengkap
            seperti kamar ganti dan toilet yang nyaman. Staf kami juga ramah dan
            siap bantu kapan pun. Jadi, kalo lagi cari tempat main futsal yang
            oke, mampir aja ke Lucky Futsal!
          </h1>
          <Button
            className="bg-blue-950 mt-6 md:mt-10  h-8 md:h-10 lg:h-12 w-40 lg:w-56 text-xs md:text-sm lg:text-lg hover:bg-blue-700 self-center lg:self-start"
            text="Booking Sekarang"
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Main2;
