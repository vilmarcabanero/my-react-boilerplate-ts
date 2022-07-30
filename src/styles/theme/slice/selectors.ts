import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { themes } from '../themes';
import { isSystemDark } from '../utils';

export const selectStyledTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    if (theme.selected === 'system') {
      return isSystemDark ? themes.darks : themes.lights;
    }
    return themes[theme.selected];
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);

const selectSlice = (state: RootState) => state.theme || initialState;

export const selectTheme = createSelector([selectSlice], state => state);
