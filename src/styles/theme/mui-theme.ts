// import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export function makeTheme(mode: boolean) {
  return createTheme({
    palette: {
      primary: {
        main: '#2c94fc',
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
