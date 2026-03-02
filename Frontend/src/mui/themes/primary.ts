'use client';
import { createTheme, extendTheme } from '@mui/material/styles';

const primaryTheme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  colorSchemes: {
    light: {
        palette: {
          primary: { main: '#fff' },
          background: { default: '#fff',
                        paper: '#EfEfEf'
          },
        },
      },
    dark: {
        palette: {
            primary: { main: '#EEE' },
            background: { default: '#010101',
                          paper: '#060606'
             },
        },
    },
  }

});



export default primaryTheme;