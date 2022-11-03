import { useNavigate } from "react-router-dom"
import tw from 'tailwind-styled-components'
import { CarImg, BoldText } from "../../styles/CommonStyle"
import { convertComma } from "../../utils/convertComma"
import { isNew } from "../../utils/isNew"
import NewMark from './NewMark'
const CarItem = ({ car }) => {
  const navigate = useNavigate()
  const handleClickCarInfo = () => {
    navigate(`/car/${car.id}`)
  }
  return (
    <FlexContainer onClick={handleClickCarInfo}>
      <CarInfo>
        <BoldText>{car.attribute.brand}</BoldText>
        <BoldText>{car.attribute.name}</BoldText>
        <div>{car.attribute.segment} / {car.attribute.fuelType}</div>
        <div>월 {convertComma(car.amount)}원 부터</div>
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