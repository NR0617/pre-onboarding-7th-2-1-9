import React from "react";
import { optionList } from "../../utils/constantValue";
import Filter from "./Filter";
const FilterList = () => {
  return(
    <div>
      <form>
      {optionList.map((option,index)=>(
          <Filter key={index} option={option}/>
      )
      )}
      </form>
    </div>
  )
}

export default FilterList