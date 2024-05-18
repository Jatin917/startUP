import { configureStore } from '@reduxjs/toolkit';
import cityOrHostelReducer from '../features/currentCityOrHostel';


export default configureStore({
  reducer: {
    cityOrHostel:cityOrHostelReducer
  },
});

