import { createContext, useContext, useReducer } from 'react';
import { CarActionType } from './ActionTypes';

const initialStates = {
  detail: {},
  isLoading: true,
  hasError: false,
};

const carDetailReducer = (state, action) => {
  switch (action.type) {
    case CarActionType.GET_CAR_DETAIL: {
      return {
        detail: action.detail,
        isLoading: false,
        hasError: false,
      };
    }
    case CarActionType.GET_CAR_LOADING: {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    }
    case CarActionType.GET_CAR_SUCCESS: {
      return {
        detail: action.detail,
        isLoading: false,
        isError: false,
      };
    }
    case CarActionType.GET_CAR_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      throw Error('Unknown Action: ' + action.type);
  }
};

const CarDetailContext = createContext(null);
const CarDetailChangeContext = createContext(null);

export const useCarDetail = () => useContext(CarDetailContext);
export const useCarDetailChange = () => useContext(CarDetailChangeContext);

function CarDetailProvider({ children }) {
  const [state, dispatch] = useReducer(carDetailReducer, initialStates);
  return (
    <CarDetailContext.Provider value={state}>
      <CarDetailChangeContext.Provider value={dispatch}>{children}</CarDetailChangeContext.Provider>
    </CarDetailContext.Provider>
  );
}

export default CarDetailProvider;
