import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from '../saga/_index';
import { AuthState, initialLoginPayload, LoginPayload } from './types';

export const initialState: AuthState = {
  loginPayload: initialLoginPayload,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    someAction() {},
    login() {},
    setLoginPayload(state, action: PayloadAction<LoginPayload>) {
      state.loginPayload = action.payload;
    },
    getUser() {},
    getUsers() {},
    // [INSERT NEW ACTION KEY ABOVE] <
  },
});

export const { actions: authActions } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: authSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAuthSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
