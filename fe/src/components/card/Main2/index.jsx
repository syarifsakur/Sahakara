const CardMain2 = (props) => {
  return (
    <div
      className={`rounded-lg flex flex-col shadow-xl bg-[#F5F6F7] border-2 w-full sm:w-48 md:w-60 lg:w-72 sm:h-20 md:h-36 lg:h-48 items-center justify-center ${props.className}`}
    >
      <img
        src={props.img}
        alt=""
        className="h-12 sm:h-16 md:h-20 lg:h-24 w-12 sm:w-16 md:w-20 lg:w-24"
      />
      <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-950  md:mt-3 text-center">
        {props.text}
      </h1>
    </div>
  );
};

export default CardMain2;
