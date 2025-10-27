import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/store';

export type lang = string;

const initialState = {
  val: 'en' as lang,
};

const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setByLang: (state, action: PayloadAction<string>) => {
      state.val = action.payload;
    },
  },
});

export const { setByLang } = langSlice.actions;

export const selectLang = (state: RootState) => state.lang.val;

export default langSlice.reducer;
