import { axiosInstance } from "./axiosInstance";

export const fetchCarList = async(fuelType, segment) =>{
  const config = {
    params : {
      fuelType,
      segment
    }
  }
  const { data } =  await axiosInstance.get('/cars', config)
  const payload = data.payload
  return payload
}