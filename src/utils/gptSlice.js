import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name:"gpt",
  initialState:{
    showGptPage:false,
  },
  reducers:{
    toggleGptSearchView:(state)=>{
      state.showGptPage = !state.showGptPage;
    },
  },
});

export const {toggleGptSearchView} = gptSlice.actions;

export default gptSlice.reducer;