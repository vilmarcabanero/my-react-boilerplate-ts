import React from 'react';
import styled from '@emotion/styled';
import { Button, useTheme } from '@mui/material';
import src from 'images/facebook_logo.png';

interface Props {
  // children: React.ReactNode;
}

export function FacebookContinueButton(props: Props) {
  const theme = useTheme();
  return (
    <StyledFacebookContinueButton
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
        <StyledFacebookLogo src={src} />
        <StyledTitle>Continue with Facebook</StyledTitle>
      </StyledLabel>
    </StyledFacebookContinueButton>
  );
}

const StyledLabel = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 100%;
`;
const StyledFacebookLogo = styled.img`
  width: 18px;
  height: 18px;
  grid-column: 1;
  align-self: center;
`;
const StyledTitle = styled.div`
  justify-self: center;
  grid-column: 3 / 9;
`;

const StyledFacebookContinueButton = styled(Button)`
  text-transform: none;
  font-weight: 600;
`;
