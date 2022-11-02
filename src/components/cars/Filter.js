import React from "react"
import { useSetRecoilState } from "recoil"
import { fuelTypeParameter, segmentParameter } from "../../recoil/filterOption"
import { All, FUEL_TYPE, SEGMENT } from "../../utils/constantValue"
import tw from 'tailwind-styled-components'
const Filter = ({ option }) => {
  const setFuelTypeState = useSetRecoilState(fuelTypeParameter)
  const setSegmentState = useSetRecoilState(segmentParameter)

  const checkOnlyOne = (option) => {
    const checkboxes = document.getElementsByName(option.name)
    const allBox = document.getElementsByName(All)
    allBox[0].checked = false
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== option) {
        checkboxes[i].checked = false
      }
    }
  }

  const handleFilter = (e) => {
    if (e.name === All) {
      const fuelTypeBoxex = document.getElementsByName(FUEL_TYPE)
      const segmentBoxex = document.getElementsByName(SEGMENT)
      for (let i = 0; i < fuelTypeBoxex.length; i++) {
        fuelTypeBoxex[i].checked = false
      }
      for (let i = 0; i < segmentBoxex.length; i++) {
        segmentBoxex[i].checked = false
      }
      setFuelTypeState(null)
      setSegmentState(null)
    } else {
      if(e.name === FUEL_TYPE){
        checkOnlyOne(e)
        setFuelTypeState(option.parameter)
      }else{
        checkOnlyOne(e)
        setSegmentState(option.parameter)
      }
    }

  }
  return (
    <React.Fragment>
      <label htmlFor={option.name} >{option.name}</label>
      <FilterInput type='radio' name={option.type} value={option.parameter} onChange={(e) => handleFilter(e.target)} id={option.name} />
    </React.Fragment>
  )
}

const FilterInput = tw.input`
`

export default Filter