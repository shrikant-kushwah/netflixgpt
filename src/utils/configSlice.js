import {createSlice} from '@reduxjs/toolkit';

const confiSlice = createSlice({
  name:'config',
  initialState:{
    language:"english",
  },
  reducers:{
    changeLanguage:(state, action)=>{
      state.language = action.payload;
    }
  }
});

export const {changeLanguage} = confiSlice.actions;

export default confiSlice.reducer;