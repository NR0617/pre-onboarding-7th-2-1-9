import { instance } from './axios';

export const axiosInstance = {
  getCars: () => instance.get(`/cars`),
  getFilter: seg => instance.get(`/cars?&segment=${seg}`),
};
