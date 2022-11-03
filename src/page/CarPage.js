import React, { useEffect } from 'react';
import Heading from '../components/Heading/Heading';
import Filtering from '../components/Filtering/Filtering';
import CarList from '../components/CarList/CarList';
import { getCarList, useCarDispatch, useCarState, getCarFilter } from '../context/carContext';

function CarPage() {
  const state = useCarState();
  const dispatch = useCarDispatch();
  const { data: filter, loading, error } = state.filter;
  const { data: carList } = state.carList;

  useEffect(() => {
    getCarFilter();
  }, [getCarFilter]);

  useEffect(() => {
    getCarList(dispatch);
  }, [getCarList]);

  return (
    <div>
      <Heading text={'전체차량'} carList={carList} />
      <Filtering />

      {filter?.length === 0 ? (
        <CarList carList={carList} />
      ) : (
        <CarList carList={filter} loading={loading} error={error} />
      )}
    </div>
  );
}

export default CarPage;
