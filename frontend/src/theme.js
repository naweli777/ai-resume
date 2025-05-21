// src/theme.js
'use client'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    hero: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    subtitle: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    // add more variants as needed
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    // extend with other colors
  },
});

export default theme;
