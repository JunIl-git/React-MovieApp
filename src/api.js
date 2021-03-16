import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "faccecff1cb84f19f71246203143cdbd",
    language: "en-US"
  }
});

api.get("movie/popular");

export default api;