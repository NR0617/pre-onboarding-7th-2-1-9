import React from "react"
import { useRecoilState } from "recoil"
import {segmentParameter } from "../../recoil/filterOption"
import tw from 'tailwind-styled-components'
const Filter = ({ option }) => {
const [segmentState,setSegmentState] = useRecoilState(segmentParameter)
const handleFilter = () => {
  setSegmentState(option.parameter)
}
  return (
    <FilterWrapper>
      <FilterInput type='button' name={option.type} value={option.name} id={option.name} onClick={handleFilter} selected={segmentState===option.parameter}>{option.name}</FilterInput>
    </FilterWrapper>
  )
}

const FilterWrapper = tw.div`
`

const FilterInput = tw.div`
${(p)=>p.selected ? 'bg-myBlack' : 'bg-myGray'}
${(p)=>p.selected ? 'text-white' : 'text-myBlack'}
rounded-2xl
w-12
text-center
cursor-pointer
mx-1
`


export default Filter