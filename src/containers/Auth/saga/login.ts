import { PayloadAction } from '@reduxjs/toolkit';
import { ApiCall } from 'api/ApiCall';
import createAPI from 'api/createAPIWithHeader';
import { ApiResponse } from 'apisauce';
import { call, put } from 'redux-saga/effects';
import * as U from '../LoginForm/utils';
import { LoginPayload, LoginResponse } from '../slice/types';
import { authActions as actions } from '../slice/_index';

export function* login(action: PayloadAction<LoginPayload>) {
  const api = createAPI();

  yield put(actions.setLoginSuccess(false));
  yield put(actions.setIsAuthLoading(true));
  const response: ApiResponse<LoginResponse> = yield call(
    api.call,
    ApiCall.login,
    action.payload,
  );
  yield put(actions.setIsAuthLoading(false));

  if (response.ok) {
    const token: string | undefined = response.data?.accessToken;
    if (token) localStorage.setItem('authToken', token);
    yield put(actions.setLoginSuccess(true));
  } else {
    if (response.data?.message === 'not-yet-registered') {
      yield put(actions.setEmailError(U.EMAIL_NOT_REGISTERED));
    } else if (response.data?.message === 'password-incorrect') {
      yield put(actions.setEmailError(''));
      yield put(actions.setPasswordError(U.PASSWORD_INCORRECT));
    } else {
      alert('Something went wrong'); //This should be replaced by Notifications component.
    }
  }
}
