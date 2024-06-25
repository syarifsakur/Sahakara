// import foto from "../../../assets/img.png";
import CardTurnamen from "../../../components/card/Turnamen";
import { useEffect, useState } from "react";
import group from "../../../assets/Group.svg";
import { getTurnamen } from "../../../services/turnamen";

const FeatKontenTurnamen = () => {
  const [turnamen, setTurnamen] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getTurnamen();
      setTurnamen(res?.data?.turnamen);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  if (!turnamen) {
    return <div className="h-screen flex justify-center items-center">turnamen belum ada!</div>;
  }
  return (
    <div className="mt-14 lg:mt-36">
      <div className="flex w-full items-center gap-2 lg:gap-8 px-10">
        <h1 className="text-xs lg:text-2xl font-bold text-blue-950 w-[40%] lg:w-[20%]">
          Event Kompetisi
        </h1>
        <div className="h-[1px] bg-[#091E42] w-full"></div>
      </div>
      <div className="m-10 lg:m-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {turnamen?.map((k, index) => (
          <CardTurnamen
            key={index}
            link={`/turnamen/detail/${k.id}`}
            foto={k.foto}
            judul={k.judul}
            ttl={k.date}
            kategori="futsal"
            alamat={k.lokasi}
            penyelanggara={k.author}
          ></CardTurnamen>
        ))}
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
          className="h-5 fill-blue-950 animate-bounce text-[26px]"
        />
      </div>
    </div>
  );
};

export default FeatKontenTurnamen;
