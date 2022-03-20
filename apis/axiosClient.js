import axios from 'axios';


const axiosClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json'
  },
});

export const AXIOS = axios.create({
  baseURL: 'http://ec2-13-213-62-197.ap-southeast-1.compute.amazonaws.com:8080/',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default axiosClient;