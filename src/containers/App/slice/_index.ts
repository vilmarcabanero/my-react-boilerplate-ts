import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { AppState } from './types';

export const initialState: AppState = {
  prevPath: '',
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPrevPath(state, action: PayloadAction<string>) {
      state.prevPath = action.payload;
    },
    // [INSERT NEW ACTION KEY ABOVE] <
  },
});

export const { actions: appActions } = slice;

export const useAppSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAppSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
