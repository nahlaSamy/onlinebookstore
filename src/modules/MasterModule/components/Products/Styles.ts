// styles.ts
import { SxProps, Theme } from '@mui/material/styles';

export const cardStyles: SxProps<Theme> = {
  maxWidth: 345,
  textAlign: 'center',
  position: 'relative',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover .MuiCardMedia-root': { opacity: 0.8 },
  '&:hover .hoverButton': { opacity: 1 }
};

export const mediaBoxStyles: SxProps<Theme> = {
  position: 'relative',
  padding: 3
};

export const mediaStyles: SxProps<Theme> = {
  transition: 'opacity 0.3s ease-in-out',
  borderRadius: '8px 8px 0 0'
};

export const hoverButtonStyles: SxProps<Theme> = (hover: boolean) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#ED553B',
  color: 'white',
  width: '226.91px',
  height: '44.15px',
  opacity: hover ? 1 : 0,
  transition: 'opacity 0.3s ease-in-out',
  fontWeight: 'bold',
  fontSize: '14px',
  borderRadius: 0,
  '&:hover': {
    backgroundColor: '#FF4500'
  }
});

export const cardContentStyles: SxProps<Theme> = {
  padding: '16px'
};

export const titleStyles: SxProps<Theme> = (theme: Theme) => ({
  fontWeight: 'bold',
  fontSize: '16px',
  color: theme.typography.textCard.color
});

export const authorStyles: SxProps<Theme> = (theme: Theme) => ({
  color: theme.palette.text.secondary,
  marginBottom: '8px'
});

export const priceStyles: SxProps<Theme> = (theme: Theme) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  fontSize: '18px'
});
