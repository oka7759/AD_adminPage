import { configureStore } from '@reduxjs/toolkit';
import {
  bucketsReducer,
  trandsReducer,
  brandReducer,
  adListReducer,
  dateReducer,
  newBrandReducer,
  adListSelectReducer,
  checkModalReducer,
  idxReducer,
} from './action';

export default configureStore({
  reducer: {
    buckets: bucketsReducer,
    trands: trandsReducer,
    brand: brandReducer,
    adList: adListReducer,
    date: dateReducer,
    newBrand: newBrandReducer,
    adListSelect: adListSelectReducer,
    checkModal: checkModalReducer,
    idx: idxReducer,
  },
});
