import React from 'react';
import styled from '@emotion/styled';
import { FormProps } from './_index';

interface Props {
  children: React.ReactNode;
  p: FormProps;
}

export function Form(props: Props) {
  return (
    <StyledLoginForm color="primary" onSubmit={props.p.handleLogin}>
      {props.children}
    </StyledLoginForm>
  );
}

const StyledLoginForm = styled.form``;
