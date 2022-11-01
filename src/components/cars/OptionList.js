import React from "react";
import Option from "./Option";
const Options = () => {
  const All = 'ALL'
  const SEGMENT = 'SEGMENT'
  const FUEL_TYPE = 'FUEL_TYPE'
  const optionList = [
    {
      name : '전체',
      type : All,
    }, 
    {
    name :  '대형',
    type: SEGMENT
    }, 
    {
      name:'중형',
      type: SEGMENT
    }, 
    {
      name:'소형',
      type: SEGMENT
    },
    {
      name:'SUV',
      type: SEGMENT
    }, 
    {
      name:'가솔린',
      type:FUEL_TYPE
    },
    {
      name:'전기',
      type:FUEL_TYPE
    },
    {
      name:'하이브리드',
      type : FUEL_TYPE
    }
    
  ]
  return(
    <dv>
      {optionList.map((option,index)=>(
        <React.Fragment key={index}>
          {option.type === All&& <Option optionName={option.name}/>} 
          {option.type === SEGMENT&& <Option optionName={option.name}/>}
          {option.type === FUEL_TYPE&& <Option optionName={option.name}/>}
        </React.Fragment>
      )
      )}
    </dv>
  )
}

export default Options