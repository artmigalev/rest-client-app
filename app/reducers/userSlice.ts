import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/store';

export interface User {
  uid: string | null;
  displayName: string | null;
}

const initialState: User = {
  uid: null,
  displayName: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => ({
      ...state,
      uid: action['payload']['uid'],
      displayName: action['payload'].displayName,
    }),
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
