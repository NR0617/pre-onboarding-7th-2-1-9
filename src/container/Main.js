import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import CarItem from '../components/cars/CarItem';
import FilterList from "../components/cars/FilterList"
import PageState from "../components/PageState/PageState"
import Loading from "../components/PageState/Loading"
import { carList } from "../recoil/carList"
import { segmentParameter } from "../recoil/filterOption"
import { ContentWrapper } from '../components/common/style';
const Main = () => {
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
    <ContentWrapper>
      <FilterList />
      {content}
    </ContentWrapper>
  )
}


export default Main