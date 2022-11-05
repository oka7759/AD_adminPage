import { createSlice } from '@reduxjs/toolkit';

// 로딩처리
export const buckets = createSlice({
  name: 'buckets',
  initialState: { value: [] },
  reducers: {
    getBuckets: (state, action) => {
      state.value = [...action.payload];
    },
  },
});
export const { getBuckets } = buckets.actions;
export const bucketsReducer = buckets.reducer;

export const trands = createSlice({
  name: 'trands',
  initialState: { value: [] },
  reducers: {
    getTrands: (state, action) => {
      state.value = [...action.payload];
    },
  },
});
export const { getTrands } = trands.actions;
export const trandsReducer = trands.reducer;

export const brand = createSlice({
  name: 'brand',
  initialState: {
    value: {},
  },
  reducers: {
    getBrand: (state, action) => {
      state.value = { ...action.payload };
    },
  },
});
export const { getBrand } = brand.actions;
export const brandReducer = brand.reducer;
