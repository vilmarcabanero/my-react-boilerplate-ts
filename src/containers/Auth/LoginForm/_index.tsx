import { useDispatch } from 'react-redux';
import { useAuthSlice } from '../slice/_index';
import * as C from './components';
import { Formik, FormikProps, useFormik } from 'formik';
import { initialLoginPayload } from '../slice/payload';
import { LoginPayload } from '../slice/types';
import { validationSchema } from './utils';

export function LoginForm() {
  const actions = useAuthSlice().actions;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialLoginPayload,
    onSubmit: handleLogin,
    validationSchema: validationSchema,
  });

  function handleLogin(loginPayload: LoginPayload) {
    dispatch(actions.login(loginPayload));
    formik.resetForm();
  }

  return (
    <Formik
      initialValues={initialLoginPayload}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      {(formikProps: FormikProps<LoginPayload>) => (
        <C.FormWrapper>
          <C.Form>
            <C.LoginTitle />
            <C.Title />
            <C.EmailInput formik={formikProps} />
            {!formikProps.dirty ||
              (!formikProps.errors.email && (
                <C.PasswordInput formik={formikProps} />
              ))}
            <C.LoginButton formik={formikProps} />
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
      )}
    </Formik>
  );
}
