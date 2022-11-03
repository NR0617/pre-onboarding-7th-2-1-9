import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import CarItem from "../components/cars/CarItem"
import FilterList from "../components/cars/FilterList"
import Layout from "../components/common/Layout"
import HeaderBar from "../components/common/HeaderBar"
import PageState from "../components/PageState/PageState"
import Loading from '../components/PageState/Loading'
import { carList } from "../recoil/carList"
import { segmentParameter } from "../recoil/filterOption"
import { ContentContainer } from '../styles/CommonStyle'
const HomePage = () => {
  const segment = useRecoilValue(segmentParameter)
  const CarsLoadable = useRecoilValueLoadable(carList(segment))
  let Cars = []
  let content = null
  switch (CarsLoadable.state) {
    case 'hasValue':
      Cars = CarsLoadable.contents
      if (Cars.length === 0) {
        content = <PageState state={'empty'} />
      } else {
        content = (Cars?.map((car, index) => (
          <CarItem key={index} car={car} />
        )))
      }
      break;
    case 'hasError':
      content = <PageState state={'error'} />
      break;
    case 'loading':
      content = <Loading />
      break;
    default:
      content = <Loading />
  }

  return (
    <Layout>
      <HeaderBar title={'전체 차량'} />
      <ContentContainer>
        <FilterList />
        {content}
      </ContentContainer>
    </Layout>
  )
}


export default HomePage