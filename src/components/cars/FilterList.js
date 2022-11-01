import React from "react";
import { optionList } from "../../utils/constantValue";
import Filter from "./Filter";
const FilterList = () => {
  return(
    <div>
      {optionList.map((option,index)=>(
        <React.Fragment key={index}>
          <Filter option={option}/>
        </React.Fragment>
      )
      )}
    </div>
  )
}

export default FilterList