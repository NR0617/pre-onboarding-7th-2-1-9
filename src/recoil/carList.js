import { selectorFamily } from "recoil";
import { fetchCarList } from "../api/cars";

export const carList = selectorFamily({
  key:'carList',
  get: (carInfo) =>  async () => {
    const response = await fetchCarList(carInfo.fuelType, carInfo.segment)
    return response
  }
})