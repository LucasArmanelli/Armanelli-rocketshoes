/*
  Utilizando a lib: https://github.com/typicode/json-server
  Para criação de uma API REST fake.
*/
import axios from 'axios';

const api = axios.create({
  baseURL:
    'http://localhost:https://my-json-server.typicode.com/LucasArmanelli/Armanelli-rocketshoes',
});

export default api;
