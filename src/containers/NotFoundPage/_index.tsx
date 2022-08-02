import * as React from 'react';
import styled from '@emotion/styled';
import { P } from './P';
import { Link } from './Link';
import { NavBar } from 'components/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { Typography } from '@mui/material';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found.</P>
        <Link to={process.env.PUBLIC_URL + '/'}>
          <ReturnToHome>Return to Home Page</ReturnToHome>
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${(p: any) => p.theme.palette.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

const ReturnToHome = styled(Typography)`
  color: ${(p: any) => {
    // console.log('theme.palette', p.theme);
    return p.theme.palette.primary.main;
  }};
`;
