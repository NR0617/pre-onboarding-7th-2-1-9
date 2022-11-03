import React from 'react';
import Heading from '../components/Heading/Heading';
import CarDetail from '../components/CarDetail/CarDetail';
import { useCarState } from '../context/carContext';

function CarDetailPage() {
  const state = useCarState();
  const { data: carList } = state.carList;

  return (
    <div>
      <Heading text={'차량상세'} />
      <CarDetail carList={carList?.payload} />
    </div>
  );
}

export default CarDetailPage;
