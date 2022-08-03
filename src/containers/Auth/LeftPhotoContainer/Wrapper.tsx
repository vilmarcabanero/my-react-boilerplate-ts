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
          theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#f5f6fa',
      }}
    >
      {props.children}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* background-color: #f5f6fa; */

  @media (max-width: ${BreakPoints.lg}) {
    visibility: hidden;
  }
`;
