import fb from "../../assets/fb.svg"
import ig from "../../assets/ig.svg"
import yt from "../../assets/yt.svg"

const Footer = () => {
  return (
    <div className="bg-blue-950 h-28 poppins ">
        <div className=" flex mx-20 h-full items-center justify-between text-white text-xl">
        <div className="flex gap-x-40">
            <h1>2024 Lucky Futsal</h1>
            <div className="flex gap-x-10">
            <h1>Privacy Policy</h1>
            <h1>Legal</h1>
            </div>
        </div>
        <div className="flex gap-x-2">
            <img src={fb} alt="" className="w-6 h-6"/>
            <img src={ig} alt="" />
            <img src={yt} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Footer
