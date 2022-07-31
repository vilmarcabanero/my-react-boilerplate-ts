import styled from '@emotion/styled';
// import * as Material from '@mui/material';

interface Props {
  children: JSX.Element[] | JSX.Element;
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
