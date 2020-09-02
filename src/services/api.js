import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/LucasArmanelli/Armanelli-rocketshoes',
});

export default api;
