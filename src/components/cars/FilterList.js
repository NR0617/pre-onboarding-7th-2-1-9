import React from "react";
import tw from 'tailwind-styled-components'
import { optionList } from "../../utils/constantValue";
import Filter from "./Filter";
const FilterList = () => {

  return (
    <FilterWrapper>
      {optionList.map((option, index) => (
        <Filter key={index} option={option} />
      )
      )}
    </FilterWrapper>
  )
}

const FilterWrapper = tw.section`
flex
border-y-2
border-myBlack
py-[0.5%]
`

export default FilterList