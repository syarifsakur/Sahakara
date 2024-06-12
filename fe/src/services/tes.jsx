import axios from "axios"

export const getBerita = async () => {
    try {
        const response = await axios.get('http://localhost:2003/blog')
        return response
    } catch (error) {
        return error
    }
}