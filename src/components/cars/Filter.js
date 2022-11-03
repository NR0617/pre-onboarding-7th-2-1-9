import React from "react"
import { useRecoilState } from "recoil"
import {segmentParameter } from "../../recoil/filterOption"
import { FilterInput } from "./style"
const Filter = ({ option }) => {
const [segmentState,setSegmentState] = useRecoilState(segmentParameter)
const handleFilter = () => {
  setSegmentState(option.parameter)
}
  return (
      <FilterInput type='button' name={option.type} value={option.name} id={option.name} onClick={handleFilter} selected={segmentState===option.parameter}>{option.name}</FilterInput>
  )
}


export default Filter