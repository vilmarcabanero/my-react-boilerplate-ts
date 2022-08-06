/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, CircularProgress } from '@mui/material';
import { FormikProps } from 'formik';
import { useSelector } from 'react-redux';
import { selectAuth } from '../slice/selectors';
import { LoginPayload } from '../slice/types';
import { useNavigate } from 'react-router-dom';
import { selectApp } from 'containers/App/slice/selectors';
interface Props {
  formik: FormikProps<LoginPayload>;
}

export function LoginButton({ formik }: Props) {
  const state = useSelector(selectAuth);
  const navigate = useNavigate();
  const appState = useSelector(selectApp);

  useEffect(() => {
    if (state.loginSuccess) {
      formik.resetForm();
      navigate(appState.prevPath || '/', { replace: true });
    }
  }, [state.loginSuccess]);
  return (
    <StyledLoginButton
      color="primary"
      variant="contained"
      type="submit"
      fullWidth
      disabled={!formik.dirty || !formik.isValid}
    >
      {state.isAuthLoading ? (
        <CircularProgress size={24} style={{ color: '#fff' }} />
      ) : (
        'Continue'
      )}
    </StyledLoginButton>
  );
}

const StyledLoginButton = styled(Button)`
  text-transform: none;
  margin-bottom: 12px;
  font-weight: 600;
`;
