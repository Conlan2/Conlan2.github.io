'use client';
import { PaletteColor } from '@mui/material/styles';
import { createTheme, extendTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    gradient: string;
}
  interface PaletteOptions {
      gradient?: string;
  }
}
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
          gradient: 'linear-gradient(to bottom, var(--mui-palette-background-paper), var(--mui-palette-background-default))',

        },
      },
    dark: {
        palette: {
            primary: { main: '#EEE' },
            background: { default: '#010101',
                          paper: '#060606',
             },
            gradient: 'linear-gradient(to bottom, var(--mui-palette-background-paper), var(--mui-palette-background-default))',
        },
    },
  }

});



export default primaryTheme;