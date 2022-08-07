import React, { FormEventHandler } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function Form(props: Props) {
  return (
    <StyledLoginForm onSubmit={props.onSubmit}>
      {props.children}
    </StyledLoginForm>
  );
}

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;

  margin: 0px auto 24px;
  padding: 32px 40px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    padding: 32px 10px;
  }
`;
