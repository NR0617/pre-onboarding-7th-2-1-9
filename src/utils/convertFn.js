export const convertComma = (amount) => {
  return amount.toLocaleString()
}

export const convertSegmentToKr = (segment) => {
  let segmentKr = ''
  switch (segment) {
    case 'C':
      segmentKr = '소형'
      break
    case 'D':
      segmentKr = '중형'
      break
    case 'E':
      segmentKr = '대형'
      break
    case 'SUV':
      segmentKr = 'SUV'
      break
      default:
        segment = '차종 정보가 없습니다.'
  }
  return segmentKr
}

export const convertFuelTypeToKr = (fuelType) => {
  let fuelTypeKr = ''
  switch (fuelType) {
    case 'gasoline':
      fuelTypeKr = '가솔린'
      break
    case 'hybrid':
      fuelTypeKr = '하이브리드'
      break
    case 'ev':
      fuelTypeKr = '전기'
      break
    default:
      fuelType = '연료 정보가 없습니다.'
  }
  return fuelTypeKr
}