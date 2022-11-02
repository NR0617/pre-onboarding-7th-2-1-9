import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Loading from '../components/Loading'

const CarDetail = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!state){
      navigate('/')
    }
  },[])
  if(!state){
    return <Loading />
  }
  return (
    <div>
      <Header title={'차량 상세'} />
      <img src={state.attribute.imageUrl} alt={state.attribute.name} />
      <div>{state.attribute.brand}</div>
      <div>{state.attribute.name}</div>
      <div>{state.amount}</div>
      <div>차량 정보</div>
      <div>
        <div>차종 {state.attribute.segment}</div>
        <div>연료{state.attribute.fuelType}</div>
        <div>이용 가능일 {state.startDate}</div>
      </div>
      <div>보험</div>
      <div>

      </div>
      <div>추가상품</div>
      {state.additionalProducts.map((present, index)=>(
        <div key={index}>
          <div>{present.name}</div>
          <div>{present.amount}</div>
        </div>
      ))
      }
    </div>
  )
}

export default CarDetail