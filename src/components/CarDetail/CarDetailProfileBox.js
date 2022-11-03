import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../styles/Theme';
import { Text } from '../../styles/Text';

function CarDetailProfileBox({ image, brand }) {
  return (
    <CarDetailProfileBoxLayout>
      <CarDetailImage image={image} />
      <StyleCarDetailBrand>
        <Text text={brand.attribute.brand} fontSize={Theme.text.big} fontWeight={Theme.text.bold} />
        <Text
          text={brand.attribute.name}
          fontSize={Theme.text.extraBig}
          fontWeight={Theme.text.bold}
        />
      </StyleCarDetailBrand>
      <StyleCarDetailPrice>
        <Text text={`월 ${brand.amount} 원`} />
      </StyleCarDetailPrice>
    </CarDetailProfileBoxLayout>
  );
}

export default CarDetailProfileBox;

const CarDetailProfileBoxLayout = styled.div`
  width: 100%;
  height: 370px;
`;
const StyleCarDetailImage = styled.img`
  width: 100%;
  height: 200px;
`;

const StyleCarDetailBrand = styled.div`
  padding: 20px;
`;
const StyleCarDetailPrice = styled.div`
  text-align: right;
  padding: 0 20px;
`;
const CarDetailImage = ({ children, image }) => {
  return <StyleCarDetailImage src={image}>{children}</StyleCarDetailImage>;
};
