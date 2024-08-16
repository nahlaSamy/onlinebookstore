import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6F61', // Primary color for buttons, links, etc.
    },
    secondary: {
      main: '#FFFFFF', // Background and other secondary elements
    },
    background: {
      default: '#F5F5F5', // Background color
    },
    text: {
      primary: '#333333', // Text color
      secondary: '#888888', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '0.875rem',
      color: '#888888',
    },
    body1: {
      fontSize: '0.875rem',
    },
    // Define textCard as a custom typography variant
    textCard: {
      color: '#393280',
    },
  },
});

export default theme;
