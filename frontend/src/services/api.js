import axios from 'axios';

const api = axios.create({
  baseURL: "lexart-test-dun.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;