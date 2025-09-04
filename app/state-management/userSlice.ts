import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface UserState {
  status: boolean;
  name: string | null;
}
const initialState: UserState = {
  status: false,
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.status = true;
    },
    loggedOut: (state) => {
      state.status = false;
    },
    toggleByValue: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
    changeByValue: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { loggedIn, loggedOut, changeByValue, toggleByValue } =
  userSlice.actions;
export const selectStatus = (state: RootState) => state.user.status;
export const selectUser = (state: RootState) => state.user.name;
export default userSlice.reducer;
