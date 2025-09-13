import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'app/state-management/userSlice';
import langReducer from 'app/state-management/langSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    lang: langReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
