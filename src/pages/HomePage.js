import { useRecoilValue } from "recoil"
import FilterList from "../components/cars/FilterList"
import { carList } from "../recoil/carList"
import { fuelTypeParameter, segmentParameter } from "../recoil/filterOption"

const HomePage = () => {
  const fuelType = useRecoilValue(fuelTypeParameter)
  const segment = useRecoilValue(segmentParameter)
  const Cars = useRecoilValue(carList({fuelType, segment}))
  console.log(fuelType, segment, Cars)
  return (
    <div>
      <FilterList />
    </div>
  )
}

export default HomePage