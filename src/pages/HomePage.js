import { useRecoilValue } from "recoil"
import CarItem from "../components/cars/CarItem"
import FilterList from "../components/cars/FilterList"
import HeaderBar from "../components/HeaderBar"
import { carList } from "../recoil/carList"
import tw from 'tailwind-styled-components'
import { fuelTypeParameter, segmentParameter } from "../recoil/filterOption"

const HomePage = () => {
  const fuelType = useRecoilValue(fuelTypeParameter)
  const segment = useRecoilValue(segmentParameter)
  const Cars = useRecoilValue(carList({fuelType, segment}))
  return (
    <div>
      <HeaderBar title={'전체 차량'} />
      <LayOut>
      <FilterList />
      {Cars.map((car, index)=>(
        <CarItem key={index} car={car}/>
      ))}
      </LayOut>
    </div>
  )
}

const LayOut = tw.section`
pt-10
`

export default HomePage