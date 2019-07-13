import axios from 'axios';

const api = axios.create({
    baseURL: "https://taskcreatorbackend.herokuapp.com/"
});

export default api;