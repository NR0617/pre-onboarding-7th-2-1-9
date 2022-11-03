import { selectorFamily } from "recoil";
import { fetchCarList } from "../api/cars";

export const carList = selectorFamily({
  key:'carList',
  get: (segment) =>  async () => {
    const response = await fetchCarList(segment)
    return response
  }
})

export const filteredCarList = selectorFamily({
  key: 'filteredCarList',
  get:(id) => async () => {
    const response = await fetchCarList()
    const filteredCar = response.filter((car)=>car.id === Number(id))
    return filteredCar[0]
  }
})