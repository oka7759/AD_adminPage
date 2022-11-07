import { configureStore } from '@reduxjs/toolkit';

import {
  bucketsReducer,
  trandsReducer,
  dateReducer,
  adListSelectReducer,
  checkModalReducer,
  idxReducer,
  selecterReducer,
  rangsReducer,
  pastDateReducer,
} from './action';

export default configureStore({
  reducer: {
    buckets: bucketsReducer,
    trands: trandsReducer,
    date: dateReducer,
    adListSelect: adListSelectReducer,
    checkModal: checkModalReducer,
    idx: idxReducer,
    selecter: selecterReducer,
    rangs: rangsReducer,
    pastDate: pastDateReducer,
  },
});
