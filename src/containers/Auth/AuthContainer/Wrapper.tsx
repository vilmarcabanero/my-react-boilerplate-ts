import React from 'react';
import styled from '@emotion/styled';
import { BreakPoints } from 'styles/StyleConstants';
import { useTheme } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export function Wrapper(props: Props) {
  const theme = useTheme();

  return (
    <StyledWrapper
      style={{
        background:
          theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : '#fafbfc',
      }}
    >
      {props.children}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100vh;
  visibility: visible;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${BreakPoints.lg}) {
    width: 100%;
  }
`;
