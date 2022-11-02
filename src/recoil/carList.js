import { selectorFamily } from "recoil";
import { fetchCarList } from "../api/cars";

export const carList = selectorFamily({
  key:'carList',
  get: (segment) =>  async () => {
    const response = await fetchCarList(segment)
    return response
  }
})