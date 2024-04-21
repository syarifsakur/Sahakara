import  {useState} from 'react'
import axios from "axios"

const Register = () => {
        const [formData, setFormData] = useState({
          usernname: '',
          email: '',
          password: '',
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.usernname]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Lakukan validasi atau kirim data ke server di sini
          axios.post("http://localhost:2000/register")
          .then((response)=>{
            console.log(response.data)
            setFormData({
                username: "",
                email: "",
                password: "",
              });
          })
          .catch((error)=>{
            console.log(error)
          })
        };
    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            username
            </label>
            <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            Email
            </label>
            <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
            Password
            </label>
            <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
            />
        </div>
        <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
            Daftar
        </button>
        </form>
  )
}

export default Register
