import axios from 'axios';

export const baseURL = 'https://not-fancy-instagram-server.herokuapp.com:5021/';

export const api = axios.create({ baseURL });

export default api;
