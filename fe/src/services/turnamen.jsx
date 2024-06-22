import axios from "axios";

export const getTurnamen = async () => {
  try {
    const response = await axios.get("http://localhost:2003/turnamen");
    return response;
  } catch (error) {
    return error;
  }
};
