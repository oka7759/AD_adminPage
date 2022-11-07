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

export const date = createSlice({
  name: 'date',
  initialState: {
    value: { start: new Date('2022-02-01'), end: new Date('2022-02-07') },
  },
  reducers: {
    getDate: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getDate } = date.actions;
export const dateReducer = date.reducer;

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

export const selecter = createSlice({
  name: 'selecter',
  initialState: {
    value: { a: 'roas', b: 'cost' },
  },
  reducers: {
    checkSelect: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { checkSelect } = selecter.actions;
export const selecterReducer = selecter.reducer;

export const rangs = createSlice({
  name: 'rangs',
  initialState: {
    value: 7,
  },
  reducers: {
    checkRangs: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { checkRangs } = rangs.actions;
export const rangsReducer = rangs.reducer;

export const pastDate = createSlice({
  name: 'pastDate',
  initialState: { value: [] },
  reducers: {
    getPastDate: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getPastDate } = pastDate.actions;
export const pastDateReducer = pastDate.reducer;
