import { useState } from "react";
import axios from "axios";
import close from "../../../assets/close.svg";

const RegisterPopup = ({ onClose, onSignInClick }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [kataSandi, setkataSandi] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2003/register", {
        email,
        nama:`${firstName} ${lastName}`,
        katasandi:kataSandi,
        birthdate: `${day}-${month}-${year}`,
      })
      .then((response) => {
        console.log(response.data);
        onClose();
        alert("registrasi berhasil")
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(error.response.data.message)
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <img src={close} alt="" className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">Create an account</h2>
        <span className="block text-gray-400 text-sm mb-4">
          Already have an account?{" "}
          <a
            href="#"
            onClick={onSignInClick}
            className="text-blue-500 hover:underline"
          >
            Sign in
          </a>
        </span>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded bg-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <div className="w-full sm:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-3 py-2 border rounded bg-gray-200"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-3 py-2 border rounded bg-gray-200"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded bg-gray-200"
              value={kataSandi}
              onChange={(e) => setkataSandi(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <span className="block text-gray-700 text-sm font-bold mb-2">
              Date of birth
            </span>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Day"
                className="w-full sm:w-1/3 px-3 py-2 border rounded bg-gray-200"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Month"
                className="w-full sm:w-1/3 px-3 py-2 border rounded bg-gray-200"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Year"
                className="w-full sm:w-1/3 px-3 py-2 border rounded bg-gray-200"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <span className="block text-gray-700 text-sm mb-2">
              By clicking create account, I agree that I have read and accepted
              the{" "}
              <a href="/" className="text-blue-500 hover:underline">
                terms of use
              </a>{" "}
              and{" "}
              <a href="/" className="text-blue-500 hover:underline">
                privacy policy
              </a>
              .
            </span>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-950 text-white px-6 py-3 rounded w-full hover:bg-blue-700"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
