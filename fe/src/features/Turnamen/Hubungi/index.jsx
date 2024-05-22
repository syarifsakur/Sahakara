import bg from "../../../assets/bg-blog.svg"
import Button from "../../../components/Button"

const FeatTurnamen = () => {
  return (
    <div className="w-full">
        <img src={bg} alt="" className="w-full"/>
        <div className="w-full border-2 flex flex-col justify-center items-center gap-y-10 -mt-64 text-blue-950">
          <h3 className="font-bold text-[40px]">Hubungi Lucky Futsal Untuk Menyelenggarakan Turnamen</h3>
          <Button
              className=" bg-blue-950 h-14 w-56 text-xl hover:bg-blue-700"
              text="Hubungi Sekarang"
            ></Button>
        </div>

    </div>
  )
}

export default FeatTurnamen
