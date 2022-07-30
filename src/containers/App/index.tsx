/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { GlobalStyle } from '../../styles/global-styles';

// import { HomePage } from './pages/DummyPage/Loadable';
import { NotFoundPage } from '../NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { makeTheme } from 'styles/theme/mui-theme';
import { CssBaseline } from '@mui/material';
import { selectTheme } from 'styles/theme/slice/selectors';

export function App() {
  const { i18n } = useTranslation();
  const { darkMode } = useSelector(selectTheme);

  return (
    <ThemeProvider theme={makeTheme(darkMode)}>
      <EmotionThemeProvider theme={makeTheme(darkMode)}>
        <CssBaseline />
        <BrowserRouter>
          <Helmet
            titleTemplate="%s - Fiona"
            defaultTitle="Fiona"
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta name="description" content="A Fiona application" />
          </Helmet>

          <Routes>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <GlobalStyle />
        </BrowserRouter>
      </EmotionThemeProvider>
    </ThemeProvider>
  );
}
