import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    filterBy: 'all',
  }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterBy: (state, action) => {
      state.filterBy = action.payload;
    }
  },
});

export const { setFilterBy } = filterSlice.actions;
export default filterSlice.reducer;
export const selectFilter = (state) => state.filter;