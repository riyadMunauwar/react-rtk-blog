import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import postReducer from '../features/post/postSlice';
import relatedPostReducer from '../features/relatedPosts/relatedPostSlice';
import filterReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    posts: postsReducer,
    relatedPosts: relatedPostReducer,
    filter: filterReducer,
  },
});
