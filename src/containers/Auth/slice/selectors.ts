import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './_index';

const selectSlice = (state: RootState) => state.auth || initialState;

export const selectAuth = createSelector([selectSlice], state => state);
