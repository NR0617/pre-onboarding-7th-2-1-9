import { useParams } from "react-router-dom"
import Header from "../components/HeaderBar"
import ListHeader from "../components/carDetail/ListHeader"
import ListItem from "../components/carDetail/ListItem"
import Layout from "../components/Layout"
import { ContentContainer, CarImg, BoldText } from "../styles/CommonStyle"
import { useRecoilValue } from "recoil"
import { filteredCarList } from "../recoil/carList"
import { convertComma } from "../utils/convertComma"
import { useEffect } from "react"
import { setMetaTags } from "../utils/setMetaTags"
const CarPage = () => {
  const params = useParams()
  const state = useRecoilValue(filteredCarList(params.id))
  const commaAmount = convertComma(state?.amount)

  useEffect(()=>{
    setMetaTags(state?.attribute.brand, state?.attribute.name, commaAmount, state?.attribute.imageUrl)
  },[state?.attribute.brand, state?.attribute.name, commaAmount, state?.attribute.imageUrl])
  return (
    <Layout>
      <Header title={'차량 상세'} />
      <ContentContainer>
      <CarImg src={state?.attribute.imageUrl} alt={state?.attribute.name} />
      <ul>
        <ListItem><BoldText>{state?.attribute.brand}</BoldText></ListItem>
        <ListItem><BoldText>{state?.attribute.name}</BoldText></ListItem>
        <ListItem><BoldText>월 {commaAmount} 원</BoldText></ListItem>
      </ul>

      <ListHeader>차량 정보</ListHeader>

      <ul>
        <ListItem><BoldText>차종</BoldText> {state?.attribute.segment}</ListItem>
        <ListItem><BoldText>연료</BoldText>{state?.attribute.fuelType}</ListItem>
        <ListItem><BoldText>이용 가능일</BoldText>{state?.startDate}</ListItem>
      </ul>

      <ListHeader>보험</ListHeader>

      <ul>
        {state?.insurance.map((insuranceItem, index)=>(
          <ListItem key={index}><BoldText>{insuranceItem.name}</BoldText>{insuranceItem.description}</ListItem>
        ))}
      </ul>

      <ListHeader>추가상품</ListHeader>

      <ul>
        {state?.additionalProducts.map((present, index) => (
          <ListItem key={index}><BoldText>{present.name}</BoldText> {present.amount}</ListItem>
        ))
        }
      </ul>

      </ContentContainer>
    </Layout>
  )
}

export default CarPage