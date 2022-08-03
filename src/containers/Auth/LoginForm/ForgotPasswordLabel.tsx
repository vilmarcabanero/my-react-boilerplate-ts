import React from 'react';
import styled from '@emotion/styled';
import { Link, useTheme } from '@mui/material';

interface Props {
  // children: React.ReactNode;
}

export function ForgotPasswordLabel(props: Props) {
  const theme = useTheme();
  return (
    <StyledForgotPasswordLabel
      href="#"
      underline="hover"
      sx={{
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.primary.main
            : '#439fd8',
      }}
    >
      Forgot password?
    </StyledForgotPasswordLabel>
  );
}

const StyledForgotPasswordLabel = styled(Link)`
  font-size: 14px;
`;
