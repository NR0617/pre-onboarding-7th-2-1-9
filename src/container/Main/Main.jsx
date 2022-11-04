import { useCar } from '../../stores/CarListProvider';
import FilterBar from './component/FilterBar';
import CarSection from './component/CarSection';
import LoadingCar from '../../components/common/LoadingCar';

const MainContainer = () => {
  const { isLoading } = useCar();

  return (
    <>
      {isLoading && <LoadingCar />}
      <FilterBar />
      <CarSection />
    </>
  );
};

export default MainContainer;
