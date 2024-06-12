const CardReview = ({ text, fp, nama }) => {
  return (
    <div className="rounded-lg w-full lg:w-96 h-auto sm:w-48 md:w-80 lg:h-52 bg-white p-4 sm:p-6 flex flex-col text-sm sm:text-base text-blue-950 justify-between poppins">
      <h1 className="line-clamp-5">{text}</h1>
      <div className="flex items-center justify-start gap-x-2 sm:gap-x-3 font-bold py-2 lg:py-0">
        <img src={fp} alt="" className="h-8 w-8 rounded-full" />
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl">{nama}</h1>
      </div>
    </div>
  );
};

export default CardReview;
