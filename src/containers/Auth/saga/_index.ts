import { takeLatest } from 'redux-saga/effects';
import { authActions as actions } from '../slice';
import * as Action from './actions';

export function* authSaga() {
  yield takeLatest(actions.someAction.type, Action.someAction);
  yield takeLatest(actions.login.type, Action.login);
  // [EXPORT NEW SAGA ABOVE] <
}
