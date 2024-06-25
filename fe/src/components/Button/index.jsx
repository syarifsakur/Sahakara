const Button = ({text,className,color}) => {
  return (
    <div>
      <a href="http://wa.me/628115811212">
      <button className={` hover:bg-blue-700 text-${color} font-bold text-xl py-2 px-4 rounded-lg ${className} `}>
        {text}
      </button>
      </a>
    </div>
  )
}

export default Button
