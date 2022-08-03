// import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
interface Props {
  // children: React.ReactNode;
}

export function LoginButton(props: Props) {
  return (
    <StyledLoginButton
      color="primary"
      variant="contained"
      type="submit"
      fullWidth
    >
      Continue
    </StyledLoginButton>
  );
}

const StyledLoginButton = styled(Button)`
  text-transform: none;
  margin-bottom: 12px;
  font-weight: 600;
`;
