import axios from 'axios';


export function setToken(token) {
  localStorage.setItem('token', token);
  BaseApi.defaults.headers.common['Authorization'] = 'JWT ' + token;
}

const BaseApi = axios.create({
  baseURL: "http://139.0.80.88:5000"
});

if (localStorage.getItem('token')) {
  BaseApi.defaults.headers.common['Authorization'] = 'JWT ' + localStorage.getItem('token');
}


export {BaseApi};