// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../Store/SearchSlice'
const store = configureStore(
 {reducer:{

     search:searchSlice
 }
});

export default store;
