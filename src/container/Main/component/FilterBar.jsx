import { useCallback } from 'react';
import { CarService } from '../../../api/request';
import Button from '../../../components/common/Button';
import { useCar } from '../../../stores/CarListProvider';
import { segmentType, fuelType } from '../../../utils/FilterType';
import { FilterSection } from './styles';

const FilterBar = () => {
  const getCar = CarService.useCarList();
  const { segment, fuelType: fuelKind } = useCar();

  const onSegmentClick = useCallback(
    e => {
      getCar({ segment: e.target.value });
    },
    [getCar]
  );

  const onFuelTypeClick = useCallback(
    e => {
      getCar({ fuelType: e.target.value });
    },
    [getCar]
  );

  return (
    <FilterSection>
      {segmentType &&
        segmentType.map((type, index) => (
          <Button
            key={index}
            value={type.value}
            text={type.name}
            isActive={type.value === segment && true}
            onClick={onSegmentClick}
          />
        ))}
      {fuelType &&
        fuelType.map((type, index) => (
          <Button
            key={index}
            value={type.value}
            text={type.name}
            isActive={type.value === fuelKind && true}
            onClick={onFuelTypeClick}
          />
        ))}
    </FilterSection>
  );
};

export default FilterBar;
