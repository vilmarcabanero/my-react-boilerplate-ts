// import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export function Title() {
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
