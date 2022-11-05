import { createSlice } from '@reduxjs/toolkit';

// 로딩처리
export const initial = createSlice({
  name: 'initial',
  initialState: { value: false },
  reducers: {
    initials: state => {
      state.value = prev => !prev;
    },
  },
});
export const { initials } = initial.actions;
export const initialReducer = initial.reducer;
