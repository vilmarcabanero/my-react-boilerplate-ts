import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { FormikProps } from 'formik';
import { LoginPayload } from '../slice/types';
import { useSelector } from 'react-redux';
import { selectAuth } from '../slice/selectors';
interface Props {
  formik: FormikProps<LoginPayload>;
}

export function EmailInput({ formik }: Props) {
  const state = useSelector(selectAuth);

  return (
    <StyledEmailInput
      name="email"
      type="text"
      placeholder="Enter email"
      variant="outlined"
      size="small"
      autoComplete="off"
      fullWidth
      sx={{ mb: 2 }}
      value={formik.values.email}
      onChange={formik.handleChange}
      error={
        (Boolean(formik.errors.email) && Boolean(formik.touched.email)) ||
        !state.isEmailValid ||
        Boolean(state.emailError)
      }
      helperText={
        (Boolean(formik.touched.email) && formik.errors.email) ||
        (Boolean(state.emailError) && state.emailError)
      }
    />
  );
}

const StyledEmailInput = styled(TextField)``;
