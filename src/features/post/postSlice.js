import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPost, incrementLike, toggleSaveValue } from './postApi';

export const fetchPost = createAsyncThunk(
  'post/fetchPost',
  async (postId) => {
    return await getPost(postId);
  }
);


export const likePost = createAsyncThunk(
  'post/likePost',
  async({updatedValue, postId}) => {
    return await incrementLike(updatedValue, postId);
  }
)


export const toggleSave = createAsyncThunk(
  'post/toggleSave',
  async({value, postId}) => {
    return await toggleSaveValue(value, postId);
  }
)

const initialState = {
    isLoading: false,
    isError: false,
    error: '',
    data: null,
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(likePost.fulfilled, (state, action) => {
          state.data.likes = action.payload.data.likes;
      })
      .addCase(toggleSave.fulfilled, (state, action) => {
        state.data.isSaved = action.payload.data.isSaved;
    })
  }
});

export default postSlice.reducer;


export const selectPost = (state) => state.post;