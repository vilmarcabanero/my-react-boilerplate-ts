import React from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  p: any;
}

export function Form(props: Props) {
  return (
    <StyledLoginForm color="primary" onSubmit={props.p.onSubmit}>
      {props.children}
    </StyledLoginForm>
  );
}

const StyledLoginForm = styled.form``;
