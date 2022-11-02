import { axiosInstance } from "./axiosInstance";

export const fetchCarList = async(segment) =>{
  const config = {
    params : {
      segment
    }
  }
  const { data } =  await axiosInstance.get('/cars', config)
  const payload = data.payload
  return payload
}