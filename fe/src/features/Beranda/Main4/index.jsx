import asnawi from "../../../assets/asnawi.svg";
import Button from "../../../components/Button";

const Main4 = () => {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 mt-10 poppins flex flex-col md:flex-row justify-between gap-y-10 md:gap-y-0 md:gap-x-24">
      <img
        src={asnawi}
        alt="asnawi.svg"
        className="h-80 md:h-96 lg:h-[700px] mx-auto md:mx-0"
      />
      <div className="flex flex-col gap-y-6 md:gap-y-10 text-center md:text-left">
        <h1 className="font-bold text-blue-950 text-lg md:text-xl lg:text-[32px] mt-10 md:mt-32 ">
          Hubungi kami melalui telepon atau pesan WhatsApp untuk informasi lebih
          lanjut. Tunggu apa lagi? Ayo bermain futsal di Lucky Futsal!
        </h1>
        <div className="flex-grow">
          <Button
            className="bg-blue-950 h-12 md:h-[50px] w-full md:w-auto mx-auto md:mx-0 sm:mb-8"
            text="Tanyakan Sekarang"
            color="white"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Main4;
