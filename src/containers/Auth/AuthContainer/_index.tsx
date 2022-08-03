import React from 'react';
import { AuthFormContainer } from '../AuthFormContainer/_index';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAuthSlice } from '../slice';
// import { selectAuth } from '../slice/selectors';
import * as C from './components';

interface Props {}

export function AuthContainer(props: Props) {
  // const actions = useAuthSlice().actions;
  // const dispatch = useDispatch();
  // const state = useSelector(selectAuth);
  return (
    <C.Wrapper>
      <AuthFormContainer />
    </C.Wrapper>
  );
}
