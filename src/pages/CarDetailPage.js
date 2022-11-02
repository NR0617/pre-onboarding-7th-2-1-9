import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Header from "../components/HeaderBar"
// import Loading from '../components/Loading'
import ListHeader from "../components/carDetail/ListHeader"
import ListItem from "../components/carDetail/ListItem"
const CarDetail = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate,state])
  // if (!state) {
  //   return <Loading />
  // }
  return (
    <div>
      <Header title={'차량 상세'} />
      <img src={state?.attribute.imageUrl} alt={state?.attribute.name} />
      <ul>
        <ListItem>{state?.attribute.brand}</ListItem>
        <ListItem>{state?.attribute.name}</ListItem>
        <ListItem>{state?.amount}</ListItem>
      </ul>
      <ListHeader>차량 정보</ListHeader>
      <ul>
        <ListItem>차종 {state?.attribute.segment}</ListItem>
        <ListItem>연료{state?.attribute.fuelType}</ListItem>
        <ListItem>이용 가능일 {state?.startDate}</ListItem>
      </ul>
      <ListHeader>보험</ListHeader>
      <div>
      </div>
      <ListHeader>추가상품</ListHeader>
      <ul>
        {state?.additionalProducts.map((present, index) => (
          <ListItem key={index}>{present.name} {present.amount}</ListItem>
        ))
        }
      </ul>
    </div>
  )
}

export default CarDetail