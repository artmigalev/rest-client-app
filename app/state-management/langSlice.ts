import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export interface LangState {
  lng: string;
}
const initialState: LangState = {
  lng: 'en',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeByValue: (state, action: PayloadAction<string>) => {
      state.lng = action.payload;
    },
  },
});

export const { changeByValue } = langSlice.actions;
export const selectLng = (state: RootState) => state.lang.lng;
export default langSlice.reducer;
