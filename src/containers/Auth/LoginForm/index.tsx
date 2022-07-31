/**
 * LoginForm
 */

import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAuthSlice } from '../slice';
// import { selectAuth } from '../slice/selectors';
import * as C from './components';

interface Props {}

export function LoginForm(props: Props) {
  // const actions = useAuthSlice().actions;
  // const dispatch = useDispatch();
  // const state = useSelector(selectAuth);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: HTMLFormElement) => {
    e.preventDefault();
    console.log('email', email);
    console.log('password', password);
  };

  const p = {
    formProps: {
      onSubmit: handleLogin,
    },
    emailInputProps: {
      email,
      setEmail,
    },
    passwordInputProps: {
      password,
      setPassword,
    },
  };

  return (
    <C.Wrapper>
      <C.Form p={p.formProps}>
        <C.FormWrapper>
          <C.Title />
          <C.EmailInput p={p.emailInputProps} />
          <C.PasswordInput p={p.passwordInputProps} />
          <C.LoginButton />
        </C.FormWrapper>
      </C.Form>
    </C.Wrapper>
  );
}
