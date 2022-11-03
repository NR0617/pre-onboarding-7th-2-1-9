export const segmentList = [
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

export const feulType = [
  { value: 'gasoline', name: '가솔린' },
  { value: 'ev', name: '전기' },
  { value: 'hybrid', name: '하이브리드' },
];

export const findFilterName = (data, value) => {
  const result = data.filter(item => item.value === value);
  return result.length ? result[0].name : '-';
};
