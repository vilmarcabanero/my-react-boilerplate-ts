import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function AuthTitle(props: Props) {
  return <StyledAuthTitle>Entropiya</StyledAuthTitle>;
}

const StyledAuthTitle = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
  color: ${(props: any) => props.theme.palette.primary.main};
`;
