import * as React from 'react';
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectStyledTheme } from './slice/selectors';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  const theme = useSelector(selectStyledTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
