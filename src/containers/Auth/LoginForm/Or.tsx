import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function Or(props: Props) {
  return <StyledOr>OR</StyledOr>;
}

const StyledOr = styled(Typography)`
  font-size: 12px;
  opacity: 0.7;
  margin-bottom: 12px;
`;
