// import { orange } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

export function makeTheme(mode: boolean): Theme {
  return createTheme({
    palette: {
      primary: {
        main: '#4bb1f0',
        contrastText: '#fff',
      },
      mode: mode ? 'dark' : 'light',
    },
    // status: {
    //   danger: orange[500],
    // },
  });
}

declare module '@mui/material/styles' {
  interface Theme {
    // status: {
    //   danger: string;
    // };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    // status?: {
    //   danger?: string;
    // };
  }
}
