import { configureStore } from '@reduxjs/toolkit';
import { initialReducer } from './action';

export default configureStore({
  reducer: { initial: initialReducer },
});
