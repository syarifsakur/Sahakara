import search from "../../assets/Search.svg"

const Search = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4 lg:gap-y-10 -mt-24 lg:-mt-52 text-blue-950">
      <h3 className="font-bold text-[14px] lg:text-[32px]">Temukan Artikel Serta Tips Seputar Olahraga Futsal</h3>
      <div className="flex flex-col items-center w-[80%] lg:w-[666px] h-8 lg:h-14 rounded-2xl shadow-xl bg-white">
        <input type="text" className="rounded-lg w-[90%] text-[11px] lg:text-sm lg:w-[90%] ml-[30px] pl-[2px] lg:ml-[73px] h-full" placeholder="cari seputar olahraga futsal"/>
        <img src={search} alt="" className="absolute -ml-[300px] lg:-ml-[590px] mt-2 lg:w-12 h-4 w-4 lg:h-12"/>
      </div>
    </div>
  )
}

export default Search
