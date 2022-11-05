import { configureStore } from '@reduxjs/toolkit';
import { initialsReducer } from './action';

export default configureStore({
  reducer: { initials: initialsReducer },
});
