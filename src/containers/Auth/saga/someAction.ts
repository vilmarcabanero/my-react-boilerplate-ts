import createAPI from 'api/createAPI';
import { call } from 'redux-saga/effects';
//import { authActions as actions } from '../slice';

export function* someAction() {
  const api = yield createAPI();

  const response = yield call(api.call, 'someAction');

  if (response.ok) {
  } else {
  }
}
