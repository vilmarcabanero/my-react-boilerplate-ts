import { Paper, useTheme } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { PageWrapper } from './PageWrapper';

export function NavBar() {
  const theme = useTheme();
  return (
    <Wrapper
      elevation={theme.palette.mode === 'dark' ? 2 : 0}
      sx={{ borderRadius: 0 }}
    >
      <PageWrapper>
        <Logo />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Paper)`
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
