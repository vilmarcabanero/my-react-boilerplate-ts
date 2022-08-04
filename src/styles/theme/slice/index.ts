import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { getThemeFromStorage } from '../utils';
import { ThemeState } from './types';

export const initialState: ThemeState = {
  selected: 'system',
  darkMode: getThemeFromStorage(),
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // changeTheme(state, action: PayloadAction<ThemeKeyType>) {
    //   state.selected = action.payload;
    // },
    setDarkMode(state, action: PayloadAction<boolean>) {
      const toBeStored = JSON.stringify(action.payload);
      localStorage.setItem('darkMode', toBeStored);
      state.darkMode = action.payload;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
