import React, { useEffect } from 'react';
import Heading from '../components/Heading/Heading';
import CarDetail from '../components/CarDetail/CarDetail';
import { getCarList, useCarDispatch, useCarState } from '../context/carContext';

function CarDetailPage() {
  const state = useCarState();
  const dispatch = useCarDispatch();
  const { data: carList } = state.carList;

  useEffect(() => {
    getCarList(dispatch);
  }, [getCarList]);

  return (
    <div>
      <Heading text={'차량상세'} />
      <CarDetail carList={carList?.payload} />
    </div>
  );
}

export default CarDetailPage;
