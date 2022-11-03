import React, { createContext, useReducer, useContext } from 'react';
import { axiosInstance } from '../api/axiosInstance';
import { loadingState, errorState, dataState } from './carContextState';

const initialState = {
  carList: {
    loading: false,
    data: [],
    error: null,
  },
  filter: {
    data: [],
    fuelType: '',
    segment: '',
    loading: true,
    error: false,
  },
};

function CarReducer(state, action) {
  switch (action.type) {
    case 'GET_CARS_LOADING':
      return {
        ...state,
        carList: loadingState,
      };
    case 'GET_CARS_DATA':
      return {
        ...state,
        carList: dataState(action.data),
      };
    case 'GET_CARS_ERROR':
      return {
        ...state,
        carList: errorState(action.error),
      };
    case 'GET_FILTER_LOADING':
      return {
        ...state,
        filter: loadingState,
      };
    case 'GET_SEGMENT_DATA':
      return {
        ...state,
        segment: action.segment,
        filter: dataState(action.data),
      };
    case 'GET_FUEL_DATA':
      return {
        ...state,
        fuelType: action.feulType,
        filter: dataState(action.data),
      };
    case 'GET_FILTER_ERROR':
      return {
        ...state,
        filter: errorState(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const CarStateContext = createContext(null);
const CarDispatchContext = createContext(null);

export function CarProvider({ children }) {
  const [state, dispatch] = useReducer(CarReducer, initialState);
  return (
    <CarStateContext.Provider value={state}>
      <CarDispatchContext.Provider value={dispatch}>{children}</CarDispatchContext.Provider>
    </CarStateContext.Provider>
  );
}

export function useCarState() {
  const state = useContext(CarStateContext);
  if (!state) {
    throw new Error('Cannot find issuesProvider');
  }
  return state;
}

export function useCarDispatch() {
  const dispatch = useContext(CarDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find issuesProvider');
  }
  return dispatch;
}

export async function getCarList(dispatch) {
  dispatch({ type: 'GET_CARS_LOADING' });
  try {
    const response = await axiosInstance.getCars();
    dispatch({ type: 'GET_CARS_DATA', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_CARS_ERROR', error: e });
  }
}

export async function getCarFilter(dispatch, seg) {
  dispatch({ type: 'GET_FILTER_LOADING' });
  try {
    const response = await axiosInstance.getFilter(seg);
    dispatch({ type: 'GET_SEGMENT_DATA', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_FILTER_ERROR', error: e });
  }
}
