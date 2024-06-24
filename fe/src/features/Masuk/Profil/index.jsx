// Profile.js
import React from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>You need to login to view this page.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Halo {user.name}!
          </h1>
          <div className="flex justify-center mb-6">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-32 h-32"
            />
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Nama</label>
              <input
                type="text"
                name="name"
                value={user.name}
                className="w-full px-4 py-2 border rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                className="w-full px-4 py-2 border rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Tanggal Lahir</label>
              <input
                type="text"
                name="birthdate"
                value={user.birthdate}
                className="w-full px-4 py-2 border rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Alamat</label>
              <input
                type="text"
                name="address"
                value={user.address}
                className="w-full px-4 py-2 border rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">No Handphone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                className="w-full px-4 py-2 border rounded-lg"
                readOnly
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
