import right from "../../../assets/right.svg";
import left from "../../../assets/left.svg";
import CardReview from "../../../components/card/reviewPengguna";
import fp1 from "../../../assets/fp1.svg";
import fp2 from "../../../assets/fp2.svg";
import fp3 from "../../../assets/fp3.svg";

const Main3 = () => {
  return (
    <div className="w-full py-10 flex flex-col gap-y-10 bg-gradient-to-r from-blue-950 to-red-700">
      <h1 className="text-center text-white font-bold text-4xl">
        Review Pengguna Lucky Futsal
      </h1>
      <div className="mx-5 md:mx-10 flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-5 lg:gap-x-10 justify-center items-center">
        <img
          src={left}
          alt=""
          className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 hidden sm:block"
        />
        <CardReview
          text="“Lapangannya bagus, bersih, dan ga ribet. Plus, stafnya ramah-ramah. Paling suka sama suasana nyaman dan harga yang terjangkau.”"
          fp={fp1}
          nama="Hadi Prasetyo"
        />
        <CardReview
          text="“Cara mudah utk booking lapangan futsal, gampang dapatnya, mudah bayarnya, terima kasih.”"
          fp={fp2}
          nama="Candrika"
        />
        <CardReview
          text="“Paling enak sih di Lucky Futsal, Lapangannya mantap, gak ada yang bolong-bolong. Harganya juga bersahabat buat kantong mahasiswa kayak aku.”"
          fp={fp3}
          nama="Rizky Anugrah"
        />
        <img
          src={right}
          alt=""
          className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default Main3;
