/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../../styles/global-styles';
import { CssBaseline } from '@mui/material';
import { AppRoutes } from './AppRoutes';
import { AppProviders } from './AppProviders';
import { AppHelmet } from './AppHelmet';

export function App() {
  return (
    <AppProviders>
      <CssBaseline />
      <BrowserRouter>
        <AppHelmet />
        <AppRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </AppProviders>
  );
}
