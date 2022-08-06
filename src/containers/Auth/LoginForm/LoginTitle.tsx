import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export function LoginTitle() {
  return <StyledLoginTitle>Login to continue to:</StyledLoginTitle>;
}

const StyledLoginTitle = styled(Typography)`
  font-size: 16px;
  margin-top: 2px;
`;
