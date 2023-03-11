import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts, getPostsSortBy } from './postsApi';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return await getPosts();
  }
);

export const fetchSortedPosts = createAsyncThunk(
  'posts/fetchSortedPosts',
  async (sortBy) => {
    return await getPostsSortBy(sortBy);
  }
)


const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    data: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(fetchSortedPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSortedPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.data = action.payload.data;
      })
      .addCase(fetchSortedPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  }
});

export default postsSlice.reducer;


export const selectAllPosts = (state) => {

  let posts;

  if(state.filter.filterBy === 'saved'){
    posts = state.posts.data.filter(post => post.isSaved);
  }else {
    posts = state.posts.data;
  }

  return {...state.posts, data: posts};
}