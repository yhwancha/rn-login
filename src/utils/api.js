import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.219.168:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default API;