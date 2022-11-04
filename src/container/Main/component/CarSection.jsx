import Link from 'next/link';
import Empty from '../../../components/layout/Empty';
import { useCar } from '../../../stores/CarListProvider';
import CarItem from './CarItem';
import { CarListSection } from './styles';

const CarSection = () => {
  const { carList } = useCar();
  if (!carList.length) return <Empty text={'차량이 없습니다.'} />;

  return (
    <CarListSection>
      {carList &&
        carList.map((car, index) => (
          <Link href={`/car/${car.id}`} key={index}>
            <CarItem car={car} />
          </Link>
        ))}
    </CarListSection>
  );
};

export default CarSection;
