import { useDispatch } from 'react-redux';
import { useAuthSlice } from '../slice/_index';
import * as C from './components';
import { useFormik } from 'formik';
import { LoginPayload } from '../slice/types';
import { validationSchema } from './utils';
import { initialLoginPayload } from '../slice/utils';

export function LoginForm() {
  const actions = useAuthSlice().actions;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialLoginPayload,
    validationSchema,
    onSubmit: handleLogin,
  });

  function handleLogin(values: LoginPayload) {
    dispatch(actions.login(values));
  }

  return (
    <C.FormWrapper>
      <C.Form onSubmit={formik.handleSubmit}>
        <C.LoginTitle />
        <C.Title />
        <C.EmailInput formik={formik} />
        {!formik.dirty ||
          (!formik.errors.email && <C.PasswordInput formik={formik} />)}
        <C.LoginButton formik={formik} />
        <C.Or />
        <C.GoogleContinueButton />
        <C.FacebookContinueButton />
        <C.MicrosoftContinueButton />
        <C.LoginFormFooter>
          <C.ForgotPasswordLabel />
          <C.Dot />
          <C.GoToRegisterLabel />
        </C.LoginFormFooter>
      </C.Form>
    </C.FormWrapper>
  );
}
