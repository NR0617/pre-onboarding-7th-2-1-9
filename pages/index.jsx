import { useEffect } from 'react';
import Layout from '../src/components/layout/Layout';
import MainContainer from '../src/container/Main/Main';
import { CarService } from '../src/api/request';
import { useCar, useCarChange } from '../src/stores/CarListProvider';
import { CarActionType } from '../src/stores/ActionTypes';

const Main = ({ payload }) => {
  const dispatch = useCarChange();
  const { segment, fuelType } = useCar();
  useEffect(() => {
    if (!segment && !fuelType) {
      dispatch({ type: CarActionType.GET_CAR_LIST, carList: payload });
    }
  }, [payload, segment, fuelType, dispatch]);

  return (
    <>
      <Layout content={<MainContainer />} />
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const {
      data: { payload },
    } = await CarService.getCarList();

    return {
      props: { payload },
      revalidate: 600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Main;
