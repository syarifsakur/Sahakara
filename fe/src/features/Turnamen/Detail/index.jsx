import bg from "../../../assets/bg-blog.svg";
import Button from "../../../components/Button";
import bola from "../../../assets/2.svg";
import lokasi from "../../../assets/Vector2.svg";
import icon from "../../../assets/3.svg";
import waktu from "../../../assets/4.svg";
import map from "../../../assets/5.svg";

const FeatDetailTurnamen = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col justify-center">
        <img src={bg} alt="" className="w-full" />
        <div className="w-full flex flex-col gap-y-4 px-10 -mt-48 text-blue-950 poppins">
          <div className="flex w-full items-center">
            <Button
              className=" bg-blue-950 h-12 w-60 pr-14 text-xl hover:bg-blue-700"
              text="Kompetisi Futsal"
              color="white"
            ></Button>
            <img src={bola} alt="" className="h-8 w-8 absolute  ml-48" />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <h1 className="font-bold text-blue-950 text-5xl">Insevent</h1>
            <p className="text-2xl">Peserta 2/14</p>
          </div>
        </div>
      </div>
      <div className="w-full px-10 mt-24 text-2xl flex justify-between">
        <div className="w-full poppins flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-2 w-full">
            <h1 className="font-bold text-blue-950">Tentang Kompetisi</h1>
            <p className="max-w-full">
              Insevent kembali diadakan dengan hadih uang tunai Rp.2.000.000.
              Segera daftar dan menangkan Insevent.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-5">
              <img src={lokasi} alt="" className="h-5 w-5" />
              <h1 className="font-bold text-blue-950">Lokasi</h1>
            </div>
            <p className="max-w-full">
              Jl. Raya Kedung Baruk, Sempaja Selatan, Samarinda Utara, Kota
              Samarinda
            </p>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <h1 className="font-bold text-blue-950">Petunjuk Jalan</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19839.33859706804!2d117.159734!3d-0.454746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTrCsDE2JzI5LjEiUyA0wrAwNyc0OC4wIlc!5e0!3m2!1sen!2s!4v1617726637783!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg w-[110%] h-96"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <div className="bg-blue-950 text-white w-[75%] h-[70%] px-8 py-6 flex flex-col gap-1 rounded-2xl">
            <h2 className="text-2xl font-bold">RP. 135.000/ Club</h2>
            <p className="text-xl">Slot terbatas !</p>
            <p className="text-xl">Hubungi Lucky Futsal Untuk Mendaftar</p>
            <Button
              text="Daftar Tournamen"
              className="bg-white text-2xl font-medium w-full mt-3"
              color="blue-950"
            ></Button>
            <div className="flex justify-between items-center w-full gap-3 my-4">
              <img src={icon} alt="" className="h-10" />
              <p className="text-xl">
                Event ini hanya menerima metode pembayaran tunai !
              </p>
            </div>
            <div className="h-1 bg-white w-full my-3"></div>
            <div className="flex items-center gap-3 my-2">
              <img src={waktu} alt="" className="h-10" />
              <div>
                <h1 className="text-2xl font-bold">Waktu & Tanggal</h1>
                <p className="text-[16px]">Selasa, 3 Oktober 2023 19:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 my-2">
              <img src={map} alt="" className="h-10" />
              <div>
                <h1 className="text-2xl font-bold">Lapangan</h1>
                <p className="text-[16px]">
                  Jl. Raya Kedung Baruk, Sempaja Selatan, Samarinda Utara, Kota
                  Samarinda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatDetailTurnamen;
