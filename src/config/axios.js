import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.covid19api.com/',
});
export default axios;
