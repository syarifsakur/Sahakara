import { useState } from "react";
import axios from "axios";
import close from "../../../assets/close.svg";
import Cookies from 'js-cookie';

const LoginPopup = ({ onClose, onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [katasandi, setkatasandi] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2003/login", { email, katasandi })
      .then((response) => {
        console.log(response.data);
        onClose();
        alert(response.data.message)
        if(response.data.token){
          Cookies.set('token', response.data.token, { expires: 1 }); // Set expires to 1 day
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error.response.data.message)
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-4 md:mx-0 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <img src={close} alt="close" className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Login now</h2>
        <span className="block text-gray-700 text-sm mb-6">
          Hi, Welcome Back 👋
        </span>
        <div className="flex flex-col items-center mb-2 w-full">
          <button className="bg-gray-200 text-black w-full py-2 rounded mb-4 hover:bg-gray-900 hover:text-white">
            Login with Google
          </button>
          <div className="flex items-center justify-between w-full mb-4">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-2 text-gray-500 text-sm">or</span>
            <span className="flex-grow border-t border-gray-300"></span>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email id"
              className="w-full px-3 py-2 border rounded bg-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="katasandi"
            >
              katasandi
            </label>
            <input
              type="password"
              id="katasandi"
              name="katasandi"
              placeholder="Enter your katasandi"
              className="w-full px-3 py-2 border rounded bg-gray-200"
              value={katasandi}
              onChange={(e) => setkatasandi(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2 text-gray-700 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot katasandi?
            </a>
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              type="submit"
              className="w-full bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
        <span className="block text-gray-700 text-sm mt-6">
          Not Registered yet?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            onClick={onSignUpClick}
          >
            Create an account
          </a>{" "}
          sign up
        </span>
      </div>
    </div>
  );
};

export default LoginPopup;
