import React from 'react';
import styled from '@emotion/styled';
import { Button, useTheme } from '@mui/material';
import { MICROSOFT_LOGO_URL } from './utils';

export function MicrosoftContinueButton() {
  const theme = useTheme();
  return (
    <StyledMicrosoftContinueButton
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
        <StyledMicrosoftLogo src={MICROSOFT_LOGO_URL} />
        <StyledTitle>Continue with Microsoft</StyledTitle>
      </StyledLabel>
    </StyledMicrosoftContinueButton>
  );
}

const StyledLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
`;
const StyledMicrosoftLogo = styled.img`
  width: 18px;
  height: 18px;
  grid-column: 1;
  align-self: center;
`;
const StyledTitle = styled.div`
  justify-self: center;
  grid-column: 3 / 9;
`;

const StyledMicrosoftContinueButton = styled(Button)`
  text-transform: none;
  font-weight: 600;
`;
