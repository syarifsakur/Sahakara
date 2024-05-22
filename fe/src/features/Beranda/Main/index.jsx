import Button from "../../../components/Button";
import img1 from "../../../assets/img.png";

const Main = () => {
  return (
    <>
      <div className="w-full my-[-40px] md:my-5">
        <div className="flex h-[500px] justify-center items-center  mx-10 relative ">
          {/* <div className="flex gap-x-10 border-2 w-[100%]">
      {slides.map((s) => (
        <>
            <img  src={s} alt={`Slide ${ + 1}`} className="w-full overflow-hidden" />
            </>
          ))}
          </div> */}

          <img
            src={img1}
            alt=""
            className="rounded-3xl w-full h-[400px] md:h-[500px] lg:h-full object-cover"
          />
          <div className="kata justify-center poppins text-white font-bold items-center text-center  h-28 flex flex-col gap-y-8 max-w-full absolute my-1/2 mx-20">
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-5xl">
              GEBRAKAN DI ERA DIGITAL
            </h2>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl max-w-[800px]">
              Memanfaatkan Teknologi Untuk Mempermudah dan Mempercepat Proses
              Pembookingan lapangan Futsal.
            </h2>
            <Button
              className=" bg-blue-950 mt-10 md:mt-20 h-8 md:h-10 lg:h-12 w-40 lg:w-56 text-xs md:text-sm lg:text-lg hover:bg-blue-700"
              text="Booking Sekarang"
              color="white"
            ></Button>
            <h1></h1>
          </div>
        </div>
        <h1 className="flex justify-center text-3xl font-bold">....</h1>
      </div>
    </>
  );
};

export default Main;
