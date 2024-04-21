const Button = (props) => {
  return (
    <div>
      <a href="https://wa.me/628115811212">
      <button className={`bg-${props.color}-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg  `}>
        {props.text}
      </button>
      </a>
    </div>
  )
}

export default Button
