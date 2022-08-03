import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function LoginTitle(props: Props) {
  return <StyledLoginTitle>Login to continue to:</StyledLoginTitle>;
}

const StyledLoginTitle = styled(Typography)`
  font-size: 16px;
  margin-top: 2px;
`;
