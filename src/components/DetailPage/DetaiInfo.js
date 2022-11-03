import React from 'react';
import * as Styled from './style';

const DetailInfo = ({ id, attribute, startDate, amount, insurance, additionalProducts }) => {
  return (
    <div>
      <Styled.CarImageContainer src={attribute.imageUrl} alt="" />
      <Styled.CarBrand>{attribute.brand}</Styled.CarBrand>
      <Styled.CarName>{attribute.name}</Styled.CarName>
      <Styled.CarPrice>월{amount}원</Styled.CarPrice>
      <Styled.CarinfoTitle>차량정보</Styled.CarinfoTitle>
      <Styled.CarInfoContent>{attribute.segment}</Styled.CarInfoContent>
      <Styled.CarInfoContent>{attribute.fuelType}</Styled.CarInfoContent>
      <Styled.CarInfoContent>{startDate}</Styled.CarInfoContent>
      <Styled.CarinfoTitle>보험</Styled.CarinfoTitle>
      <Styled.CarInfoContent>{insurance[0].name}</Styled.CarInfoContent>
      <Styled.CarInfoContent>{insurance[0].description}</Styled.CarInfoContent>
      <Styled.CarinfoTitle>추가상품</Styled.CarinfoTitle>
      {additionalProducts.length !== 0 ? (
        <Styled.CarInfoContent>{additionalProducts[0].name}</Styled.CarInfoContent>
      ) : null}
      {additionalProducts.length !== 0 ? (
        <Styled.CarInfoContent>{additionalProducts[0].amount}</Styled.CarInfoContent>
      ) : null}
    </div>
  );
};

export default DetailInfo;
