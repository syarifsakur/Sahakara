import search from "../../assets/Search.svg"

const Search = () => {
  return (
    <div className="w-full border-2 flex flex-col justify-center items-center gap-y-10 -mt-52 text-blue-950">
      <h3 className="font-bold text-[32px]">Temukan Artikel Serta Tips Seputar Olahraga Futsal</h3>
      <div className="flex flex-col items-center w-[666px] h-14 rounded-2xl shadow-xl bg-white">
        <input type="text" className="rounded-lg w-[90%] ml-[73px] h-full" placeholder="cari seputar olahraga futsal"/>
        <img src={search} alt="" className="absolute -ml-[590px] mt-2 w-12 h-12"/>
      </div>
    </div>
  )
}

export default Search
