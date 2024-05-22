import jadwal from "../../../assets/jadwal.svg"
import ball from "../../../assets/ball.svg"
import lokasi from "../../../assets/lokasiTurnamen.svg"

const CardTurnamen = ({foto,judul,ttl,kategori,alamat,penyelanggara}) => {
  return (
    <a href="/turnamen/detail">
      <div className="h-[500px] rounded-3xl shadow-2xl">
        <img
          src={foto}
          alt=""
          className="h-[50%] w-full rounded-t-3xl object-cover"
        />
        <div className="flex flex-col gap-5 mt-2 px-4">
          <h1 className="font-bold poppins ">{judul}</h1>
          <div className="flex gap-x-4">
            <img src={jadwal} alt="" className="h-4 w-4" />
            <h1 className="text-sm">{ttl}</h1>
          </div>
          <div className="flex gap-x-4">
            <img src={ball} alt="" className="h-4 w-4" />
            <h1 className="text-sm">{kategori}</h1>
          </div>
          <div className="flex gap-x-4">
            <img src={lokasi} alt="" className="h-4 w-4" />
            <h1 className="text-sm">{alamat}</h1>
          </div>
          <div className="h-1 border-b-2 bg-[#D8D3D3]"></div>
          <div className="flex gap-x-3">
            <h1 className="text-[#707075] text-sm">Penyelenggara : </h1>
            <h1 className="font-bold text-sm">{penyelanggara}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardTurnamen;
