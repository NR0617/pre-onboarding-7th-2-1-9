import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles/Theme';
import { transDate } from '../../utils/dateTrans';

function CarDetailInfo({ info }) {
  const date = transDate(info.startDate);

  const amount = info.additionalProducts[0]?.amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const isNoAmount = info.additionalProducts.length === 0;

  return (
    <div>
      <DetailTitle children={'차량정보'} />
      <DetailText name={'차종'} descript={info.attribute.segment} />
      <DetailText name={'연료'} descript={info.attribute.fuelType} />
      <DetailText name={'이용 가능일'} descript={`${date} 부터`} />
      <DetailTitle children={'보험'} />
      <DetailText name={info.insurance[0].name} descript={info.insurance[0].description} />
      <DetailText name={info.insurance[1].name} descript={info.insurance[1].description} />
      {!isNoAmount && (
        <>
          <DetailTitle children={'추가상품'} />
          <DetailText name={info.additionalProducts[0].name} descript={amount} />
        </>
      )}
    </div>
  );
}

export default CarDetailInfo;

const StyleDetailTitle = styled.div`
  width: 100%;
  background-color: ${Theme.color.blue};
  color: ${Theme.color.white};
  font-size: ${Theme.text.default};
  font-weight: ${Theme.text.bold};
  height: 50px;
  line-height: 50px;
  color: #fff;
  padding: 0 20px;
`;

const DetailTitle = ({ children }) => {
  return <StyleDetailTitle>{children}</StyleDetailTitle>;
};

const StyledDetailTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`;
const StyledDetailName = styled.p`
  font-size: ${Theme.text.default};
  font-weight: ${Theme.text.bold};
`;
const StyledDtailDescript = styled.p`
  font-size: ${Theme.text.default};
  font-weight: ${Theme.text.thin};
`;

const DetailText = ({ name, descript }) => {
  return (
    <StyledDetailTextBox>
      <StyledDetailName> {name} </StyledDetailName>
      <StyledDtailDescript>{descript}</StyledDtailDescript>
    </StyledDetailTextBox>
  );
};
