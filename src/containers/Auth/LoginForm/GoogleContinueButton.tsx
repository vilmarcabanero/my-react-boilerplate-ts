import React from 'react';
import styled from '@emotion/styled';
import { Button, useTheme } from '@mui/material';
import { GOOGLE_LOGO_URL } from './utils';

export function GoogleContinueButton() {
  const theme = useTheme();

  return (
    <StyledGoogleContinueButton
      color="primary"
      variant="contained"
      fullWidth
      sx={{
        mb: 2,
        boxShadow: theme.shadows[4],
        color: theme.palette.text.primary,
        bgcolor: theme.palette.background.default,
        '&:hover': {
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[900]
              : theme.palette.grey[100],
        },
      }}
    >
      <StyledLabel>
        <StyledGoogleLogo src={GOOGLE_LOGO_URL} />
        <StyledTitle>Continue with Google</StyledTitle>
      </StyledLabel>
    </StyledGoogleContinueButton>
  );
}

const StyledLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
`;
const StyledGoogleLogo = styled.img`
  width: 18px;
  height: 18px;
  grid-column: 1;
  align-self: center;
`;
const StyledTitle = styled.div`
  justify-self: center;
  grid-column: 3 / 9;
`;

const StyledGoogleContinueButton = styled(Button)`
  text-transform: none;
  font-weight: 600;
`;
