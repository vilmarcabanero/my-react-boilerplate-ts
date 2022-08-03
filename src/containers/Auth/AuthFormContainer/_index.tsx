import React from 'react';
import { LoginForm } from '../LoginForm/_index';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAuthSlice } from '../slice';
// import { selectAuth } from '../slice/selectors';
import * as C from './components';

interface Props {}

export function AuthFormContainer(props: Props) {
  // const actions = useAuthSlice().actions;
  // const dispatch = useDispatch();
  // const state = useSelector(selectAuth);
  return (
    <C.Wrapper>
      <C.TitleContainer>
        <C.AuthTitleLogo /> <C.AuthTitle />
      </C.TitleContainer>
      <LoginForm />
    </C.Wrapper>
  );
}
