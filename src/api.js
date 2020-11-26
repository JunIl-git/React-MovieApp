import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params : {
        api_key: "1741397d20244cdac6d96043aaca828f",
        language: "en-US"
    }
})

api.get("tv/popular")
export default api;