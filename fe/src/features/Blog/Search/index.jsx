import bg from "../../../assets/yo.png"
import Search from "../../../components/Search"

const FeatSearch = () => {
  return (
    <div className="w-full">
        <img src={bg} alt="" className="w-full h-32 lg:h-64"/>
        <Search/>
    </div>
  )
}

export default FeatSearch
