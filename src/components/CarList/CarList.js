import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '../../styles/Text';
import { Theme } from '../../styles/Theme';
import { CarImageBox } from '../../styles/CarImageBox';

function CarList({ carList, loading, error }) {
  const navigate = useNavigate();

  const cars = carList?.payload;

  if (loading) {
    return (
      <>
        <TextComponent>
          <Text text={'불러오는 중...'} fontWeight={Theme.text.bold} />
        </TextComponent>
      </>
    );
  } else if (cars?.length === 0) {
    return (
      <>
        <TextComponent>
          <Text text={'차량이 없습니다.'} fontWeight={Theme.text.bold} />
        </TextComponent>
      </>
    );
  } else if (error) {
    return <div> error...</div>;
  }

  return (
    <CarListLayout>
      {cars?.map((car, index) => {
        return (
          <CarListItem key={index} onClick={() => navigate(`/${car.id}`)}>
            <CarListInfo>
              <Text text={`${car.attribute.brand}`} fontWeight={Theme.text.bold} />
              <Text text={`${car.attribute.name}`} fontWeight={Theme.text.bold} />
              <br />
              <Text
                text={`${car.attribute.segment} / ${car.attribute.fuelType}`}
                fontWeight={Theme.text.thin}
                fontSize={Theme.text.small}
              />
              <Text
                text={`월 ${car.amount}원 부터`}
                fontWeight={Theme.text.thin}
                fontSize={Theme.text.small}
              />
            </CarListInfo>
            <CarImageBox isNew={true} image={car.attribute.imageUrl} />
          </CarListItem>
        );
      })}
    </CarListLayout>
  );
}

export default CarList;

const CarListLayout = styled.div`
  width: 100%;
`;

const CarListItem = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${Theme.color.black};
  cursor: pointer;
`;

const CarListInfo = styled.div``;

const TextComponent = styled.div`
  margin-top: 60%;
  text-align: center;
`;
