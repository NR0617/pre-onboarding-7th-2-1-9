const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

export const convertDate = date => {
  const tmpDate = new Date(date);
  return `${tmpDate.getMonth() + 1}월 ${tmpDate.getDate()}일 (${WEEKDAY[tmpDate.getDay()]}) 부터`;
};

export const getDateDiff = date => {
  const nowDate = new Date();
  const tmpDate = new Date(date);
  const diffDate = nowDate.getTime() - tmpDate.getTime();
  return (diffDate / (1000 * 60 * 60 * 24));
};
