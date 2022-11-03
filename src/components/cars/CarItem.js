import tw from 'tailwind-styled-components'
import { useNavigate } from "react-router-dom"
import { CarImg, BoldText } from "../../styles/CommonStyle"
import { convertComma } from "../../utils/convertFn"
import { isNew } from "../../utils/isNew"
import NewMark from './NewMark'
import { convertSegmentToKr, convertFuelTypeToKr } from "../../utils/convertFn"
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

const FlexContainer = tw.section`
flex
p-5
border-b-2
border-myBlack
relative
`
const CarInfo = tw.section`
w-full
`
const CarImgWrapper = tw.section`
div{
  relative
  w-full
  h-full
}
`


export default CarItem