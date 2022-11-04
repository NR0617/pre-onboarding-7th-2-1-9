export const segmentType = [
  {
    name: '전체',
    value: '',
  },
  {
    name: '대형',
    value: 'E',
  },
  {
    name: '중형',
    value: 'D',
  },
  {
    name: '소형',
    value: 'C',
  },
  {
    name: 'SUV',
    value: 'SUV',
  },
];

export const fuelType = [
  {
    name: '가솔린',
    value: 'gasoline',
  },
  {
    name: '전기',
    value: 'ev',
  },
  {
    name: '하이브리드',
    value: 'hybrid',
  },
];

const findTypeName = (array, value) => {
  const result = array.filter(item => item.value === value);
  return result.length ? result[0].name : '-';
};
export const findSegmentName = value => {
  return findTypeName(segmentType, value);
};
export const findFuelName = value => {
  return findTypeName(fuelType, value);
};
