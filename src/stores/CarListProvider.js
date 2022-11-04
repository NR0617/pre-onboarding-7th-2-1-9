import { createContext, useContext, useReducer } from 'react';
import { CarActionType } from './ActionTypes';

const initialStates = {
  carList: [],
  fuelType: '',
  segment: '',
  isLoading: true,
  hasError: false,
};

const carReducer = (state, action) => {
  switch (action.type) {
    case CarActionType.GET_CAR_LIST: {
      return {
        ...state,
        carList: action.carList,
        isLoading: false,
        hasError: false,
      };
    }
    case CarActionType.GET_CAR_LIST_LOADING: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case CarActionType.GET_CAR_LIST_SUCCESS: {
      return {
        ...state,
        carList: action.carList,
        isLoading: false,
        isError: false,
      };
    }
    case CarActionType.GET_CAR_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case CarActionType.SET_SEGMENT: {
      return {
        ...state,
        segment: action.segment,
      };
    }
    case CarActionType.SET_FUEL_TYPE: {
      return {
        ...state,
        fuelType: action.fuelType,
      };
    }
    default:
      throw Error('Unknown Action: ' + action.type);
  }
};

const CarContext = createContext(null);
const CarChangeContext = createContext(null);

export const useCar = () => useContext(CarContext);
export const useCarChange = () => useContext(CarChangeContext);

function CarProvider({ children }) {
  const [state, dispatch] = useReducer(carReducer, initialStates);

  return (
    <CarContext.Provider value={state}>
      <CarChangeContext.Provider value={dispatch}>{children}</CarChangeContext.Provider>
    </CarContext.Provider>
  );
}

export default CarProvider;
