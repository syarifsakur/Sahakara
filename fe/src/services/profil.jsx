import axios from "axios";

export const getProfil = async (authToken) => {
  try {
    const response = await axios.get("http://localhost:2003/profil", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data; // Hanya mengembalikan data yang dibutuhkan
  } catch (error) {
    console.error("Error fetching profil:", error);
    throw new Error("Terjadi kesalahan saat mengambil data profil.");
  }
};