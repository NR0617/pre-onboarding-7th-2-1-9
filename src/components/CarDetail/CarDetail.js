import React from 'react';
import { useParams } from 'react-router-dom';
import CarDetailInfo from './CarDetailInfo';
import CarDetailProfileBox from './CarDetailProfileBox';

function CarDetail({ carList }) {
  const { id } = useParams();

  const idx = id - 1;
  const detail = carList[idx];

  return (
    <div>
      <CarDetailProfileBox image={detail.attribute.imageUrl} brand={detail} />
      <CarDetailInfo info={detail} />
    </div>
  );
}

export default CarDetail;
