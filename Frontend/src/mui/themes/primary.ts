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
  interface ColorSchemes {
    shadowChannel: String
  }
}
const primaryTheme = extendTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  colorSchemes: {
    light: {
        palette: {
          primary: { main: '#fff', },
          secondary: {main: '#65bbe6'},
          background: { default: '#fff',
                        paper: '#EfEfEf'
                        
          },
          gradient: 'linear-gradient(to bottom, var(--mui-palette-background-paper), var(--mui-palette-background-default))',  
        },
        
        
      },
    dark: {
        palette: {
            primary: { main: '#EEE' },
            secondary: {main: '#65bbe6'},
            background: { default: '#010101',
                          paper: '#060606',
             },
            gradient: 'linear-gradient(to bottom, var(--mui-palette-background-paper), var(--mui-palette-background-default))',
        },
        
    },
    
  }

});



export default primaryTheme;