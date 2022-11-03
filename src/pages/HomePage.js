import { useRecoilValue } from "recoil"
import CarItem from "../components/cars/CarItem"
import FilterList from "../components/cars/FilterList"
import HeaderBar from "../components/HeaderBar"
import { carList } from "../recoil/carList"
import { segmentParameter } from "../recoil/filterOption"
import Layout from "../components/Layout"
import { ContentContainer } from '../styles/CommonStyle'
const HomePage = () => {
  const segment = useRecoilValue(segmentParameter)
  const Cars = useRecoilValue(carList(segment))
  return (
    <Layout>
      <HeaderBar title={'전체 차량'} />
      <ContentContainer>
        <FilterList />
        {Cars?.map((car, index) => (
          <CarItem key={index} car={car} />
        ))}
      </ContentContainer>
    </Layout>
  )
}


export default HomePage