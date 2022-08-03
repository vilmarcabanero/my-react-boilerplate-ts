import React, { FormEventHandler, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAuthSlice } from '../slice';
// import { selectAuth } from '../slice/selectors';
import * as C from './components';

interface Props {}

export interface FormProps {
  handleLogin: FormEventHandler<HTMLFormElement>;
}

export interface EmailInputProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export function LoginForm(props: Props) {
  // const actions = useAuthSlice().actions;
  // const dispatch = useDispatch();
  // const state = useSelector(selectAuth);

  const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log('email', email);
  };

  const formProps: FormProps = {
    handleLogin,
  };

  const emailInputProps = {
    email,
    setEmail,
  };

  // const passwordInputProps = {
  //   password,
  //   setPassword,
  // };

  return (
    <C.Form p={formProps}>
      <C.FormWrapper>
        <C.LoginTitle />
        <C.Title />
        <C.EmailInput p={emailInputProps} />
        {/* {isValidEmailLogin && <C.PasswordInput p={passwordInputProps} />} */}
        <C.LoginButton />
        <C.Or />
        <C.GoogleContinueButton />
        <C.FacebookContinueButton />
        <C.MicrosoftContinueButton />
        <C.LoginFormFooter>
          <C.ForgotPasswordLabel />
          <C.Dot />
          <C.GoToRegisterLabel />
        </C.LoginFormFooter>
      </C.FormWrapper>
    </C.Form>
  );
}
