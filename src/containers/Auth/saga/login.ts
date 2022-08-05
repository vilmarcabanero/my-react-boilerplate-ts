import { ApiCall } from 'api/ApiCall';
import createAPI from 'api/createAPIWithHeader';
import { ApiResponse } from 'apisauce';
import { call } from 'redux-saga/effects';
import { LoginResponse } from '../slice/types';
//import { authActions as actions } from '../slice';

export function* login() {
  const api = createAPI();

  const loginPayload = {
    email: 'vionacabanero@gmail.com',
    password: '124124124',
  };

  const response: ApiResponse<LoginResponse> = yield call(
    api.call,
    ApiCall.login,
    loginPayload,
  );

  if (response.ok) {
    const token: string | undefined = response.data?.accessToken;
    if (token) localStorage.setItem('authToken', token);
  } else {
  }
}
