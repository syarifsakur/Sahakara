import asnawi from "../../../assets/asnawi.svg";
import Button from "../../../components/Button";


const Main4 = () => {
  return (
    <div className="mx-20 mt-10 poppins flex justify-between gap-x-24">
      <img src={asnawi} alt="asnawi.svg" className="h-[700px]"/>
      <div className="flex flex-col gap-y-10">
        <h1 className="font-bold text-blue-950 text-[32px] mt-32">
          Hubungi kami melalui telepon atau pesan WhatsApp untuk informasi lebih
          lanjut. Tunggu apa lagi? Ayo bermain futsal di Lucky Futsal!
        </h1>
        <Button className="bg-blue-950 h-[50px]" text="Tanyakan Sekarang"></Button>
      </div>
    </div>
  );
};

export default Main4;
