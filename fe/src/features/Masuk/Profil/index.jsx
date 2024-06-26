// Profile.js
import { useEffect, useState } from "react";
import { getProfil } from "../../../services/profil";
import Cookies from "js-cookie";

const Profile = () => {
  const [profil,setProfil] = useState()
  
  const fetchData = async () => {
    try {
      const authToken = Cookies.get("token");
      if(!authToken){
        return <p>You need to login to view this page.</p>;
      }
      const res = await getProfil(authToken);
      setProfil(res?.data[0]);
      console.log(res?.data[0].nama)
    } catch (error) {
      console.log(error);
    }
  };

  console.log(profil)
  useEffect(() => {
    fetchData();
  }, []);

  if(!profil){
    return <p>titdak ada profil</p>
  }

  if(!fetchData){
    return <p>You need to login to view this page.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Halo {profil.nama} !
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={profil.foto}
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
              value={profil.nama}
              className="w-full px-4 py-2 border rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profil.email}
              className="w-full px-4 py-2 border rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Tanggal Lahir</label>
            <input
              type="text"
              name="birthdate"
              value={profil.birthDate}
              className="w-full px-4 py-2 border rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">Alamat</label>
            <input
              type="text"
              name="address"
              value={profil.alamat}
              className="w-full px-4 py-2 border rounded-lg"
              readOnly
            />
          </div>
          <div>
            <label className="block text-gray-700">No Handphone</label>
            <input
              type="text"
              name="phone"
              value={profil.kontak}
              className="w-full px-4 py-2 border rounded-lg"
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
