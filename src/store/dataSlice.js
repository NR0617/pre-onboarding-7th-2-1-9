import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};
export const dataSlice = createSlice({
  name: 'detaildata',
  initialState,
  reducers: {
    fetch: state => {
      state.value = !state.value;
    },
  },
});

export default dataSlice;
export const { fetch, init } = dataSlice.actions;
