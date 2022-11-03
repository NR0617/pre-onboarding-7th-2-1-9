import React from "react";
import { optionList } from "../../utils/constantValue";
import Filter from "./Filter";
import { FilterWrapper } from "./style";
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


export default FilterList