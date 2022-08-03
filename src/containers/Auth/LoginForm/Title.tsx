// import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function Title(props: Props) {
  return (
    <StyledLoginTitle color="primary" sx={{ mb: 2, mt: 1 }}>
      Entropiya
    </StyledLoginTitle>
  );
}

const StyledLoginTitle = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;
