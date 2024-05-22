const CardMain2 = (props) => {
  return (
    <div className={`rounded-lg gap-y-4 flex flex-col shadow-xl bg-[#F5F6F7] border-2 w-32 h-20 lg:w-72 lg:h-48 items-center justify-center ${props.margin}`}>
        <img src={props.img} alt="" className="h-12 lg:h-20 w-12 lg:w-20 "/>
        <h1 className="text-lg font-bold text-blue-950 ">{props.text}</h1>
    </div>
  )
}

export default CardMain2
