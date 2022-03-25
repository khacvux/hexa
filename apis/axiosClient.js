import axios from 'axios';



const AXIOS = axios.create({
  // baseURL: 'http://54.169.188.10:8080/',
  baseURL: 'https://nts-sixblack-api-hexa.herokuapp.com/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default AXIOS;