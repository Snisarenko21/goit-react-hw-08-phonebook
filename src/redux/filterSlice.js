import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const getFilter = state => state.filter.value;