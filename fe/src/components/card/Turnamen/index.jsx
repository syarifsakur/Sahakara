import jadwal from "../../../assets/jadwal.svg"
import ball from "../../../assets/ball.svg"
import lokasi from "../../../assets/lokasiTurnamen.svg"

const CardTurnamen = ({link,foto,judul,ttl,kategori,alamat,penyelanggara}) => {
  return (
    <a href={link}>
      <div className="h-[300px] lg:h-[480px] rounded-3xl shadow-2xl">
        <img
          src={foto}
          alt=""
          className="h-[40%] lg:h-[50%] w-full rounded-t-3xl object-cover"
        />
        <div className="flex flex-col justify-center gap-2 lg:gap-5 mt-2 px-4">
          <h1 className="font-bold poppins line-clamp-1">{judul}</h1>
          <div className="flex gap-x-4">
            <img src={jadwal} alt="" className="h-4 w-4" />
            <h1 className="text-xs lg:text-sm line-clamp-1">{ttl}</h1>
          </div>
          <div className="flex gap-x-4">
            <img src={ball} alt="" className="h-4 w-4" />
            <h1 className="text-sm line-clamp-1">{kategori}</h1>
          </div>
          <div className="flex gap-x-4">
            <img src={lokasi} alt="" className="h-4 w-4" />
            <h1 className="text-sm line-clamp-1">{alamat}</h1>
          </div>
          <div className="h-1 border-b-2 bg-[#D8D3D3]"></div>
          <div className="flex gap-x-2 justify-between">
            <h1 className="text-[#707075] text-[10px] lg:text-sm">Penyelenggara : </h1>
            <h1 className="font-bold text-[10px] lg:text-sm line-clamp-1 h-full">{penyelanggara}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardTurnamen;
