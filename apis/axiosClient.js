import axios from 'axios';



const AXIOS = axios.create({
  // baseURL: 'https://nts-sixblack-api-hexa.herokuapp.com/',
  baseURL: 'http://ec2-13-250-123-30.ap-southeast-1.compute.amazonaws.com',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default AXIOS;