import axios from "axios";

const api = axios.create({
    baseURL: 'http://3.83.74.185:7777'
})

export default api;
