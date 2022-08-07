import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from '../saga/_index';
import * as U from './utils';
import * as I from './types';

export const initialState: I.AuthState = {
  loginPayload: U.initialLoginPayload,
  isAuthLoading: false,
  isEmailValid: true,
  emailError: '',
  isPasswordValid: true,
  passwordError: '',
  loginSuccess: false,
  // [INSERT NEW STATE ABOVE] <
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    someAction() {},
    login(_, action: PayloadAction<I.LoginPayload>) {},
    setLoginPayload(state, action: PayloadAction<I.LoginPayload>) {
      state.loginPayload = action.payload;
    },
    getUser() {},
    getUsers() {},
    setIsAuthLoading(state, action: PayloadAction<boolean>) {
      state.isAuthLoading = action.payload;
    },
    setLoginSuccess(state, action: PayloadAction<boolean>) {
      state.loginSuccess = action.payload;
    },
    setEmailError(state, action: PayloadAction<string>) {
      state.emailError = action.payload;
    },
    setPasswordError(state, action: PayloadAction<string>) {
      state.passwordError = action.payload;
    },
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
