import bg from "../../../assets/yo.png";
import Button from "../../../components/Button";
import bola from "../../../assets/2.svg";
import lokasi from "../../../assets/Vector2.svg";
import icon from "../../../assets/3.svg";
import waktu from "../../../assets/4.svg";
import map from "../../../assets/5.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailTurnamen } from "../../../services/detailTurnamen";
import { getTurnamen } from "../../../services/turnamen";
import CardTurnamen from "../../../components/card/Turnamen";

const FeatDetailTurnamen = () => {
  const { id } = useParams();
  const [tur, setTur] = useState(null);
  const [tes,setTes] = useState(null)

  const fetchData = async () => {
    try {
      const res = await getDetailTurnamen(id);
      setTur(res?.data?.turnamen[0]);
      console.log(res?.data?.turnamen[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDataAll = async () =>{
    try {
      const res = await getTurnamen()
      setTes(res?.data?.turnamen)
    } catch (error) {
      console.log(error)
    }
  }
console.log(tes)

  useEffect(() => {
    fetchData();
    fetchDataAll()
  }, [id]);
  if (!tur) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="mb-10">
      <div className="flex flex-col justify-center ">
        <img src={bg} alt="" className="w-full h-32 lg:h-64" />
        <div className="w-full flex flex-col  lg:gap-y-4 px-10 -mt-28 lg:-mt-48 text-blue-950 poppins">
          <div className="flex w-full items-center">
            <Button
              className=" bg-blue-950 lg:h-12 h-10 w-40 lg:w-60 pr-16 lg:pr-14 text-[13px] lg:text-xl hover:bg-blue-700"
              text="Kompetisi Futsal"
              color="white"
            ></Button>
            <img
              src={bola}
              alt=""
              className="h-6 w-6 lg:h-8 lg:w-8 absolute -mt-5 lg:mt-0 ml-32 lg:ml-48"
            />
          </div>
          <div className="w-full flex flex-col -mt-5 lg:mt-0 lg:gap-y-2">
            <h1 className="font-bold text-blue-950 text-2xl lg:text-5xl">
              Insevent
            </h1>
            <p className="text-lg lg:text-2xl">Peserta 2/14</p>
          </div>
        </div>
      </div>
      <div className="w-full px-10 mt-10 lg:mt-24 text-sm lg:text-2xl flex justify-between">
        <div className="w-full poppins flex flex-col gap-y-4 lg:gap-y-14">
          <div className="flex flex-col gap-y-2 w-full">
            <h1 className="font-bold text-blue-950 text-lg lg:text-2xl w-[110%]">
              Tentang Kompetisi
            </h1>
            <p className="max-w-full">
              {tur.deskripsi}
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-5 items-center">
              <img src={lokasi} alt="" className="h-5 w-5" />
              <h1 className="font-bold text-blue-950 text-lg lg:text-2xl w-[110%]">
                Lokasi
              </h1>
            </div>
            <p className="max-w-full">
              Jl. Raya Kedung Baruk, Sempaja Selatan, Samarinda Utara, Kota
              Samarinda
            </p>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <h1 className="font-bold text-blue-950 text-lg lg:text-2xl w-[110%]">
              Petunjuk Jalan
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19839.33859706804!2d117.159734!3d-0.454746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTrCsDE2JzI5LjEiUyA0wrAwNyc0OC4wIlc!5e0!3m2!1sen!2s!4v1617726637783!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg lg:w-[110%] w-[90%] h-64 lg:h-96"
            />
          </div>
        </div>
        <div className="w-full h-[750px] flex items-center justify-end">
          <div className="bg-blue-950 text-white lg:w-[75%] lg:h-[70%] w-40 h-96 lg:px-8 px-4 py-3 lg:py-6 flex flex-col gap-1 rounded-2xl">
            <h2 className="text-sm lg:text-2xl font-bold">RP.{tur.biaya_pendaftaran}/ Club</h2>
            <p className="text-xs lg:text-xl">Slot terbatas !</p>
            <p className="text-xs lg:text-xl">Hubungi Lucky Futsal Untuk Mendaftar</p>
            <Button
              text="Daftar Tournamen"
              className="bg-white h-10 lg:h-14 text-sm lg:text-2xl font-medium w-full lg:mt-3"
              color="blue-950"
            ></Button>
            <div className="flex justify-between items-center w-full gap-2 lg:gap-3 my-0 lg:my-4">
              <img src={icon} alt="" className="h-6 lg:h-10" />
              <p className="text-xs lg:text-xl">
                Event ini hanya menerima metode pembayaran tunai !
              </p>
            </div>
            <div className="h-1 bg-white w-full my-1 lg:my-3"></div>
            <div className="flex items-center gap-2 lg:gap-3 lg:my-2">
              <img src={waktu} alt="" className="h-6 lg:h-10" />
              <div>
                <h1 className="text-xs lg:text-2xl font-bold">Waktu & Tanggal</h1>
                <p className="text-xs lg:text-[16px]">{tur.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <img src={map} alt="" className="h-6 lg:h-10" />
              <div>
                <h1 className="text-xs lg:text-2xl font-bold">Lapangan</h1>
                <p className="text-xs lg:text-[16px] ll. Raya Kedung Baruk, Sempaja Selatan, Samarinda Utara, Kota
                  Samarindaine-clamp-4">
                  {tur.lokasi}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-3xl w-full px-10 my-10">turnamen lainnya</h3>
      </div>
      <div className="m-10 lg:m-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {tes?.filter((k)=>k.id != id).slice(0,4).map((k, index) => ( 
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

    </div>
  );
};

export default FeatDetailTurnamen;
