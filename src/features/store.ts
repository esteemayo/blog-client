import { configureStore } from '@reduxjs/toolkit';

import sidebarReducer from './sidebar/sidebarSlice';
import postsMenuReducer from './postsMenu/postsMenuSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    postsMenu: postsMenuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
