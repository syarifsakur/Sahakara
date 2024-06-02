import axios from "axios"

export const getBerita = async () => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=ea6852730e2248b5b43c65afb678babb')
        return response
    } catch (error) {
        return error
    }
}