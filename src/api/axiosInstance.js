import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data.statusCode) {
      switch (error.response.data.statusCode) {
        case 400:
        case 301:
        case 403:
        case 422:
          alert(error.response.data.message);
          break;
        default:
          return;
      }
    }
    return Promise.reject(error);
  }
)

