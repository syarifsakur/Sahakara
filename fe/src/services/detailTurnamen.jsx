import axios from "axios";

export const getDetailTurnamen = async (id) => {
  try {
    const response = await axios.get(`http://localhost:2003/turnamen/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
