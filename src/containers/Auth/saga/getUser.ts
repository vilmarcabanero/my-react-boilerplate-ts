import { ApiCall } from 'api/ApiCall';
import createAPI from 'api/createAPIWithHeader';
import { ApiResponse } from 'apisauce';
import { call } from 'redux-saga/effects';
import { User } from '../slice/types';
//import { authActions as actions } from '../slice';

export function* getUser() {
  const api = createAPI();

  const response: ApiResponse<User> = yield call(api.call, ApiCall.getUser);
  if (response.ok) {
  } else {
  }
}
