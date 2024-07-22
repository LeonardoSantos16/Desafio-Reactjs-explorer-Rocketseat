import axios from "axios";

export const api = axios.create({
    baseURL: 'https://desafio-node-movie-rocketseat.onrender.com'
})