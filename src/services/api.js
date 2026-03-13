import axios from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=4d0db66b5b45c7c54c97075d09ce3f5d

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;