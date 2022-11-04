import React from 'react';
import Image from 'next/legacy/image';
import NewTag from '../../../components/common/NewTag';
import { convertCurrency } from '../../../utils/convertCurrency';
import { getDateDiff } from '../../../utils/convertDate';
import { findFuelName, findSegmentName } from '../../../utils/FilterType';
import { CarArticle, CarBGDiv, CarContentSpan, CarDescDiv, CarTitleSpan } from './styles';

const CarItem = ({ car }) => {
  const segment = findSegmentName(car.attribute.segment);
  const fuel = findFuelName(car.attribute.fuelType);
  const currency_month = convertCurrency(car.amount);
  const diff_date = getDateDiff(car.createdAt);

  return (
    <CarArticle>
      <CarDescDiv>
        <CarTitleSpan>
          <p>{car.attribute.brand}</p>
          <p>{car.attribute.name}</p>
        </CarTitleSpan>
        <CarContentSpan>
          <p>
            {segment} / {fuel}
          </p>
          <p>{currency_month} 부터</p>
        </CarContentSpan>
      </CarDescDiv>
      <CarBGDiv>
        <div>
          <Image layout="fill" objectFit="contain" src={car.attribute.imageUrl} alt="car" />
        </div>
        {diff_date <= 1 && <NewTag />}
      </CarBGDiv>
    </CarArticle>
  );
};

export default CarItem;
