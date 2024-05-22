import foto from "../../../assets/img.png";
import CardTurnamen from "../../../components/card/Turnamen";
import group from "../../../assets/Group.svg"

const FeatKontenTurnamen = () => {
  return (
    <div className="mt-36">
      <div className="flex w-full items-center gap-8 px-10">
        <h1 className="text-2xl font-bold text-blue-950 w-[20%]">
          Event Kompetisi
        </h1>
        <div className="h-[1px] bg-[#091E42] w-full"></div>
      </div>
      <div className="m-10 grid grid-cols-4 gap-10">
        <CardTurnamen
          foto={foto}
          judul="Futsal"
          ttl="22 september 2024"
          kategori="futsal"
          alamat="lapangan lucky futsal samarinda"
          penyelanggara="infinite learning"
        ></CardTurnamen>
        <CardTurnamen
          foto={foto}
          judul="Futsal"
          ttl="22 september 2024"
          kategori="futsal"
          alamat="lapangan lucky futsal samarinda"
          penyelanggara="infinite learning"
        ></CardTurnamen>
        <CardTurnamen
          foto={foto}
          judul="Futsal"
          ttl="22 september 2024"
          kategori="futsal"
          alamat="lapangan lucky futsal samarinda"
          penyelanggara="infinite learning"
        ></CardTurnamen>
        <CardTurnamen
          foto={foto}
          judul="Futsal"
          ttl="22 september 2024"
          kategori="futsal"
          alamat="lapangan lucky futsal samarinda"
          penyelanggara="infinite learning"
        ></CardTurnamen>
        <CardTurnamen
          foto={foto}
          judul="Futsal"
          ttl="22 september 2024"
          kategori="futsal"
          alamat="lapangan lucky futsal samarinda"
          penyelanggara="infinite learning"
        ></CardTurnamen>
      </div>
      <div className="flex justify-center items-center my-14 gap-3">
        <a href="" className="">
          <h1 className="text-blue-950 font-semibold border-b-2 border-blue-950">
            Tampilkan Lebih Banyak
          </h1>
        </a>
        <img 
        src={group} 
        alt="" 
        className="h-5 fill-blue-950 animate-bounce text-[26px]"/>
      </div>
    </div>
  );
};

export default FeatKontenTurnamen;
