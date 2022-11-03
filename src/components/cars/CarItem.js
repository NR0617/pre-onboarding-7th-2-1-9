import { useNavigate } from "react-router-dom"
import { CarImg } from "../common/style"
import { convertComma } from "../../utils/convertFn"
import { isNew } from "../../utils/isNew"
import NewMark from './NewMark'
import { convertSegmentToKr, convertFuelTypeToKr } from "../../utils/convertFn"
import { BoldText } from './style'
import { FlexContainer, CarInfo, CarImgWrapper } from "./style"
const CarItem = ({ car }) => {
  const navigate = useNavigate()
  const handleClickCarInfo = () => {
    navigate(`/car/${car.id}`)
  }
  const commaAmount = convertComma(car?.amount)
  return (
    <FlexContainer onClick={handleClickCarInfo}>
      <CarInfo>
        <BoldText>{car.attribute.brand}</BoldText>
        <BoldText>{car.attribute.name}</BoldText>
        <div>{convertSegmentToKr(car.attribute.segment)} / {convertFuelTypeToKr(car.attribute.fuelType)}</div>
        <div>월 {commaAmount}원 부터</div>
      </CarInfo>
      <CarImgWrapper>
        <div>
          {isNew(car.createdAt) && <NewMark />}
        </div>
        <CarImg src={car.attribute.imageUrl} alt={car.attribute.name} />
      </CarImgWrapper>
    </FlexContainer>
  )
}


export default CarItem