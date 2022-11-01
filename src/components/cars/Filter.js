import { useSetRecoilState } from "recoil"
import { fuelTypeParameter, segmentParameter } from "../../recoil/filterOption"
import { All, FUEL_TYPE,SEGMENT } from "../../utils/constantValue"
const Filter = ({option})=>{
  const setFuelTypeState= useSetRecoilState(fuelTypeParameter)
  const setSegmentState= useSetRecoilState(segmentParameter)
  
  const handleOption =() => {
    if(option.type===All){
      setFuelTypeState(null)
      setSegmentState(null)
    }else if(option.type === FUEL_TYPE){
      setFuelTypeState(option.parameter)
    } else if(option.type === SEGMENT){
      setSegmentState(option.parameter)
    }
  }
  return(
    <div onClick={handleOption}>{option.name}</div>
  )
}

export default Filter