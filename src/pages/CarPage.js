import tw from 'tailwind-styled-components'
import { useParams } from "react-router-dom"
import ListHeader from "../components/carDetail/ListHeader"
import ListItem from "../components/carDetail/ListItem"
import Layout from "../components/common/Layout"
import HeaderBar from "../components/common/HeaderBar"
import PageState from "../components/PageState/PageState"
import Loading from "../components/PageState/Loading"
import { ContentContainer, CarImg } from "../styles/CommonStyle"
import { useRecoilValueLoadable } from "recoil"
import { filteredCarList } from "../recoil/carList"
import { convertComma } from "../utils/convertFn"
import { useEffect } from "react"
import { setMetaTags } from "../utils/setMetaTags"
import { convertSegmentToKr, convertFuelTypeToKr } from "../utils/convertFn"

const CarPage = () => {
  const params = useParams()
  const CarLoadable = useRecoilValueLoadable(filteredCarList(params.id))
  let state = null
  let content = {}
  switch (CarLoadable.state) {
    case 'hasValue':
      state = CarLoadable.contents
      if (Object.keys(state).length === 0) {
        content = <PageState state={'empty'} />
      } else {
        content = (
          <ContentContainer>
            <CarImg src={state?.attribute.imageUrl} alt={state?.attribute.name} />
            <ul>
              <ListItem><LeftItem>{state?.attribute.brand}</LeftItem></ListItem>
              <ListItem><LeftItem>{state?.attribute.name}</LeftItem></ListItem>
              <ListItem><RightItem><div>월 {convertComma(state?.amount)} 원</div></RightItem></ListItem>
            </ul>
            <ListHeader>차량 정보</ListHeader>
            <ul>
              <ListItem><LeftItem>차종</LeftItem><RightItem>{convertSegmentToKr(state?.attribute.segment)}</RightItem></ListItem>
              <ListItem><LeftItem>연료</LeftItem><RightItem>{convertFuelTypeToKr(state?.attribute.fuelType)}</RightItem></ListItem>
              <ListItem><LeftItem>이용 가능일</LeftItem><RightItem>{state?.startDate}</RightItem></ListItem>
            </ul>
            <ListHeader>보험</ListHeader>
            <ul>
              {state?.insurance.map((insuranceItem, index) => (
                <ListItem key={index}><LeftItem>{insuranceItem.name}</LeftItem><RightItem></RightItem>{insuranceItem.description}</ListItem>
              ))}
            </ul>
            <ListHeader>추가상품</ListHeader>
            <ul>
              {state?.additionalProducts.map((present, index) => (
                <ListItem key={index}><LeftItem>{present.name}</LeftItem> <RightItem></RightItem>{convertComma(present.amount)}</ListItem>
              ))
              }
            </ul>
          </ContentContainer>
        )
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
  useEffect(() => {
    if (state) {
      setMetaTags(state?.attribute.brand, state?.attribute.name, convertComma(state?.amount), state?.attribute.imageUrl)
    }
  }, [state])
  return (
    <Layout>
      <HeaderBar title={'차량 상세'} />
      {content}
    </Layout>
  )
}

const LeftItem = tw.div`
font-bold
`

const RightItem = tw.div`
ml-auto
`

export default CarPage