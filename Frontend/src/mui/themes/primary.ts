'use client';
import { createTheme, extendTheme } from '@mui/material/styles';

const primaryTheme = createTheme({

  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  colorSchemes: {
    light: {
        palette: {
          primary: { main: '#010101' },
          background: { default: '#fff' },
        },
      },
    dark: {
        palette: {
            primary: { main: '#fff' },
            background: { default: '#010101' },
        },
    },
  }

});



export default primaryTheme;