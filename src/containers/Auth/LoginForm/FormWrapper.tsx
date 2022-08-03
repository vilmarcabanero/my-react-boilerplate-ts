import React from 'react';
import styled from '@emotion/styled';
import { Paper, useTheme } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export function FormWrapper(props: Props) {
  const theme = useTheme();
  return (
    <StyledFormWrapper
      elevation={theme.palette.mode === 'dark' ? 2 : 0}
      sx={{
        color:
          theme.palette.mode === 'dark'
            ? theme.palette.text.primary
            : 'rgb(94, 108, 132)',
      }}
    >
      {props.children}
    </StyledFormWrapper>
  );
}

const StyledFormWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px;

  margin: 0px auto 24px;
  padding: 32px 40px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
  box-sizing: border-box;
`;
