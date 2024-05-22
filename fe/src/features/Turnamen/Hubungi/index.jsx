import bg from "../../../assets/bg-blog.svg"
import Button from "../../../components/Button"

const FeatTurnamen = () => {
  return (
    <div className="w-full">
        <img src={bg} alt="" className="w-full"/>
        <div className="w-full border-2 flex flex-col justify-center items-center gap-y-10 -mt-52 text-blue-950">
          <h3 className="font-bold text-[32px]">Hubungi Lucky Futsal Untuk Menyelenggarakan Turnamen</h3>
          <Button
              className=" bg-blue-950 h-12 w-52 text-lg hover:bg-blue-700"
              text="Hubungi Sekarang"
            ></Button>
        </div>

    </div>
  )
}

export default FeatTurnamen
