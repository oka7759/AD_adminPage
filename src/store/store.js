import { configureStore } from '@reduxjs/toolkit';
import { bucketsReducer, trandsReducer, brandReducer } from './action';

export default configureStore({
  reducer: {
    buckets: bucketsReducer,
    trands: trandsReducer,
    brand: brandReducer,
  },
});
