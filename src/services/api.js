import axios from "axios";
//Base da URL: https://api.themoviedb.org/3/
//URL da api: /movie/now_playing?api_key=edc53a3b26a266f68da217aeb3d89b71&language=pt-BR



const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
