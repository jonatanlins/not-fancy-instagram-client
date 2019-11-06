import axios from 'axios';

export const baseURL = 'https://not-fancy-instagram-server.herokuapp.com:5011/';

export const api = axios.create({ baseURL });

export default api;
