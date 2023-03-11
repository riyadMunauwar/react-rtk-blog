import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedPosts } from './relatedPostsApi';

export const fetchRelatedPosts = createAsyncThunk(
  'post/fetchRelatedPost',
  async (prop) => {
    return await getRelatedPosts(prop);
  }
);


const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    data: null,
}

const relatedPostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRelatedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchRelatedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  }
});

export default relatedPostsSlice.reducer;


export const selectRelatedPosts = (state) => state.relatedPosts;