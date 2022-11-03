import ListHeader from "../components/carDetail/ListHeader"
import ListItem from "../components/carDetail/ListItem"
import PageState from "../components/PageState/PageState"
import Loading from "../components/PageState/Loading"
import { useRecoilValueLoadable } from "recoil"
import { filteredCarList } from "../recoil/carList"
import { convertComma } from "../utils/convertFn"
import React, { useEffect } from "react"
import { setMetaTags } from "../utils/setMetaTags"
import { convertSegmentToKr, convertFuelTypeToKr } from "../utils/convertFn"
import { LeftItem, RightItem } from "../components/carDetail/style"
import { ContentWrapper,CarImg} from "../components/common/style"
const CarDetail = ({id}) =>{
  const CarLoadable = useRecoilValueLoadable(filteredCarList(id))
  let state = null
  let content = {}
  switch (CarLoadable.state) {
    case 'hasValue':
      state = CarLoadable.contents
      if (Object.keys(state).length === 0) {
        content = <PageState state={'empty'} />
      } else {
        content = (
          <ContentWrapper>
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
          </ContentWrapper>
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
  return(
    <React.Fragment>
          {content}
    </React.Fragment>
  )
  }


export default CarDetail