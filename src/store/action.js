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

export const adList = createSlice({
  name: 'adList',
  initialState: { value: [] },
  reducers: {
    getAdList: (state, action) => {
      state.value = [...action.payload];
    },
  },
});
export const { getAdList } = adList.actions;
export const adListReducer = adList.reducer;

export const date = createSlice({
  name: 'date',
  initialState: { value: { start: null, end: null } },
  reducers: {
    getDate: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getDate } = date.actions;
export const dateReducer = date.reducer;

export const newBrand = createSlice({
  name: 'newBrand',
  initialState: {
    value: [],
  },
  reducers: {
    getNewBrand: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getNewBrand } = newBrand.actions;
export const newBrandReducer = newBrand.reducer;

export const adListSelect = createSlice({
  name: 'adListSelect',
  initialState: {
    value: 'all',
  },
  reducers: {
    getAdListSelect: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getAdListSelect } = adListSelect.actions;
export const adListSelectReducer = adListSelect.reducer;

export const checkModal = createSlice({
  name: 'checkModal',
  initialState: { value: false },
  reducers: {
    isShow: state => {
      state.value = true;
    },
    isHide: state => {
      state.value = false;
    },
  },
});
export const { isShow, isHide } = checkModal.actions;
export const checkModalReducer = checkModal.reducer;

export const idx = createSlice({
  name: 'idx',
  initialState: { value: 0 },
  reducers: {
    isIdx: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { isIdx } = idx.actions;
export const idxReducer = idx.reducer;
