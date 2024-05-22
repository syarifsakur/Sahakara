const CardReview = ({text,fp,nama}) => {
  return (
    <div className="rounded-3xl w-96 h-52 bg-white px-5 py-5 flex flex-col text-blue-950 justify-between poppins">
      <h1 className="line-clamp-4 text-base">{text}</h1>
      <div className="flex items-center justify-start gap-x-4  font-bold">
        <img src={fp} alt="" />
        <h1 className="text-2xl">{nama}</h1>
      </div>
    </div>
  )
}

export default CardReview
