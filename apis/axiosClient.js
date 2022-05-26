import axios from 'axios';



const AXIOS = axios.create({
  // baseURL: 'http://54.169.188.10:8080/',
  baseURL: 'https://nts-sixblack-api-hexa.herokuapp.com/',
  // baseURL: 'http://ec2-54-169-188-10.ap-southeast-1.compute.amazonaws.com:8080/',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default AXIOS;