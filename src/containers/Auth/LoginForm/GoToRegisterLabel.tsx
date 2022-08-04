import React from 'react';
import styled from '@emotion/styled';
import { Link, useTheme } from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function GoToRegisterLabel(props: Props) {
  const theme = useTheme();
  return (
    <StyledGoToRegisterLabel
      href="#"
      underline="hover"
      sx={{
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.primary.main
            : '#439fd8',
      }}
    >
      Sign up for an account
    </StyledGoToRegisterLabel>
  );
}

const StyledGoToRegisterLabel = styled(Link)`
  font-size: 14px;
`;