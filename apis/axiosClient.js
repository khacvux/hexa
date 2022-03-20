import axios from 'axios';


const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json'
  },
});

export const AXIOS = axios.create({
  baseURL: 'https://nts-sixblack-api-hexa.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default axiosClient;