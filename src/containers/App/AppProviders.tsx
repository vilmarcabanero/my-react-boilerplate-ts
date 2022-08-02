import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { makeTheme } from 'mui-theme';
import { selectTheme } from 'styles/theme/slice/selectors';
import { useSelector } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

export function AppProviders(props: Props) {
  const { darkMode } = useSelector(selectTheme);
  return (
    <ThemeProvider theme={makeTheme(darkMode)}>
      <EmotionThemeProvider theme={makeTheme(darkMode)}>
        {props.children}
      </EmotionThemeProvider>
    </ThemeProvider>
  );
}
