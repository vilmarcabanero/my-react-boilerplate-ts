import createAPI from 'api/createAPI';
import { call } from 'redux-saga/effects';
//import { authActions as actions } from '../slice';

export function* login() {
  const api = yield createAPI();

  const response = yield call(api.call, 'login');
  if (response.ok) {
  } else {
  }
}
