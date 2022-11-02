export const fuelType = {
  "GASOLINE" : "gasoline",
  "HYBRID" : "hybrid" ,
  "EV":"ev"
}

export const segment = {
  "C" : "C",
  "D" : "D",
  "E" : "E",
  "SUV" : "SUV"
}

export const All = 'ALL'
export const SEGMENT = 'SEGMENT'
export const FUEL_TYPE = 'FUEL_TYPE'
export const optionList = [
  {
    name : '전체',
    type : All,
    parameter:null
  }, 
  {
  name :  '대형',
  type: SEGMENT,
  parameter : segment.E
  }, 
  {
    name:'중형',
    type: SEGMENT,
    parameter : segment.D
  }, 
  {
    name:'소형',
    type: SEGMENT,
    parameter : segment.C
  },
  {
    name:'SUV',
    type: SEGMENT,
    parameter : segment.SUV
  }
]
