import axios from "axios";

export const getDetailBlog = async (id) => {
  try {
    const response = await axios.get(`http://localhost:2003/blog/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
