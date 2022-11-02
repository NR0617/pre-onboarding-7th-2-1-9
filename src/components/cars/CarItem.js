import { useNavigate } from "react-router-dom"

const CarItem =({car}) => {
  const navigate = useNavigate()
  const handleClickCarInfo = () => {
    navigate(`/car/${car.id}`, {
      state: car
    })
  } 
  return(
    <div onClick={handleClickCarInfo}>
      <div>{car.attribute.brand}</div>
      <div>{car.attribute.name}</div>
      <div>{car.attribute.segment} / {car.attribute.fuelType}</div>
      <div>월 {car.amount}원 부터</div>
      <div>생성 날짜{car.createdAt}</div>
      <img src={car.attribute.imageUrl} alt={car.attribute.name}/>
    </div>
  )
}

export default CarItem