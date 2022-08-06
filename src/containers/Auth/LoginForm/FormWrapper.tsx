import React from 'react';
import styled from '@emotion/styled';
import { Paper, useTheme } from '@mui/material';

interface Props {
  children: any;
}

export function FormWrapper(props: Props) {
  const theme = useTheme();
  return (
    <StyledFormWrapper
      elevation={theme.palette.mode !== 'dark' ? 0 : 2}
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
  max-width: 400px;
  margin: 0px auto 24px;
`;
