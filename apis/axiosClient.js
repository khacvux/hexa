import axios from 'axios';



const AXIOS = axios.create({
  baseURL: 'https://nts-sixblack-api-hexa.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default AXIOS;