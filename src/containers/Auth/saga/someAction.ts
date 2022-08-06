import createAPI from 'api/createAPIWithHeader';
import { ApiCall } from 'api/ApiCall';
import { ApiResponse } from 'apisauce';
import { call } from 'redux-saga/effects';
import { Todo } from 'types/Todo';
//import { authActions as actions } from '../slice/_index';

export function* someAction() {
  const api: any = createAPI();

  const response: ApiResponse<Todo> = yield call(
    api.call,
    ApiCall.someAction,
    '1',
  );
  if (response.ok) {
  } else {
  }
}
