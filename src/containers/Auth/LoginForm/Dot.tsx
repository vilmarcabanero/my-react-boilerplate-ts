import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function Dot(props: Props) {
  return <StyledDot>•</StyledDot>;
}

const StyledDot = styled(Box)`
  color: lightgray;
  margin: 0 10px;
`;
