// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState ={data:""}

const searchSlice = createSlice({
  name: 'Search_Book',
  initialState,
  reducers: {
    search:(state,action)=>{
      state.data=action.payload;
      // state=action.payload;
    },
    // You can define more reducers here
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
