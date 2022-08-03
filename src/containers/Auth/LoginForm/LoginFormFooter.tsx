import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export function LoginFormFooter(props: Props) {
  return (
    <StyledLoginFormFooter sx={{ mt: 3 }}>
      {props.children}
    </StyledLoginFormFooter>
  );
}

const StyledLoginFormFooter = styled(Box)`
  border-top: 1px solid lightgray;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
`;
