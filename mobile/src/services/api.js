import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ip.ip.ip.ip:3333',
});

export default api;
