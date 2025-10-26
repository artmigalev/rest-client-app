import { configureStore } from '@reduxjs/toolkit';

import userReducer from './reducers/userSlice';

import langReducer from './reducers/langSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    lang: langReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
