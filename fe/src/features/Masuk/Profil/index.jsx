import { useState } from "react";

const Profil = () => {
  const { user, setUser } = useAuth();
  const [profileImage, setProfileImage] = useState(user.profileImage || "");
  const [username, setUsername] = useState(user.username || "");
  const [email, setEmail] = useState(user.email || "");

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Logic to handle profile update, and update user context
    setUser({ ...user, profileImage, username, email });
    console.log("Profile updated:", { profileImage, username, email });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profil Saya</h2>
      <form onSubmit={handleProfileUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Image
          </label>
          <input
            type="file"
            onChange={(e) =>
              setProfileImage(URL.createObjectURL(e.target.files[0]))
            }
          />
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="mt-4 w-32 h-32 rounded-full"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profil;
