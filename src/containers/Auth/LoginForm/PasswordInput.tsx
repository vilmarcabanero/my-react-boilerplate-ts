// import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Field, FormikProps } from 'formik';
import { useSelector } from 'react-redux';
import { selectAuth } from '../slice/selectors';
import { LoginPayload } from '../slice/types';

interface Props {
  formik: FormikProps<LoginPayload>;
}

export function PasswordInput({ formik }: Props) {
  const state = useSelector(selectAuth);

  // console.log('password: props.touched.password :>> ', props.touched.password);
  return (
    <StyledPasswordInput
      name="password"
      type="password"
      as={TextField}
      placeholder="Enter password"
      variant="outlined"
      size="small"
      autoComplete="off"
      fullWidth
      sx={{ mb: 2 }}
      error={
        (Boolean(formik.errors.password) && Boolean(formik.touched.password)) ||
        !state.isPasswordValid ||
        Boolean(state.passwordError)
      }
      helperText={
        (Boolean(formik.touched.password) && formik.errors.password) ||
        (Boolean(state.passwordError) && state.passwordError)
      }
    />
  );
}

const StyledPasswordInput = styled(Field)``;
