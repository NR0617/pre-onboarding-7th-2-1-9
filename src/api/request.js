import instance from './axiosInstance';
import { useCarChange } from '../stores/CarListProvider';
import { CarActionType } from '../stores/ActionTypes';

export const CarService = {
  getCarList: () => {
    return instance.get('/api/cars');
  },
  useCarList: () => {
    const dispatch = useCarChange();
    return async params => {
      dispatch({ type: CarActionType.SET_SEGMENT, segment: params.segment });
      dispatch({ type: CarActionType.SET_FUEL_TYPE, fuelType: params.fuelType });
      dispatch({ type: CarActionType.GET_CAR_LIST_LOADING });
      try {
        const config = {
          params: params,
        };
        const { data } = await instance.get('/api/cars', config);
        dispatch({ type: CarActionType.GET_CAR_LIST_SUCCESS, carList: data.payload });
      } catch {
        dispatch({ type: CarActionType.GET_CAR_LIST_ERROR });
      }
    };
  },
};
