import bg from "../../../assets/yo.png"
import Button from "../../../components/Button"

const FeatTurnamen = () => {
  return (
    <div className="w-full">
        <img src={bg} alt="" className="w-full h-32 lg:h-64"/>
        <div className="w-full flex flex-col justify-center items-center gap-y-2 lg:gap-y-10 -mt-24 lg:-mt-52 text-blue-950">
          <h3 className="font-bold text-[14px] lg:text-[32px]">Hubungi Lucky Futsal Untuk Menyelenggarakan Turnamen</h3>
          <Button
              className=" bg-blue-950 lg:h-12 h-9 w-36 lg:w-52 text-xs lg:text-lg hover:bg-blue-700"
              text="Hubungi Sekarang"
              color="white"
            ></Button>
        </div>

    </div>
  )
}

export default FeatTurnamen
