import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://preonboarding.platdev.net/',
  timeout: 5000,
});

export default instance;
