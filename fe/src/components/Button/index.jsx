const Button = ({text,className}) => {
  return (
    <div>
      <a href="https://wa.me/628115811212">
      <button className={` hover:bg-blue-700 text-white font-bold text-xl py-2 px-4 rounded-lg ${className} `}>
        {text}
      </button>
      </a>
    </div>
  )
}

export default Button
