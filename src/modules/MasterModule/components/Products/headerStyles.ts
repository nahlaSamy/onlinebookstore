// headerStyles.ts
import { SxProps, Theme } from '@mui/material/styles';

export const headerContainerStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 0',
  background: 'linear-gradient(82.93deg, #FFE6E6 0%, #F5FFFE 113.52%)', // Gradient background
  borderBottom: '1px solid #E0E0E0'
};

export const breadcrumbStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

export const linkStyles: SxProps<Theme> = {
  textDecoration: 'none',
  color: '#FF6F61', 
  '&:hover': {
    textDecoration: 'underline',
    color: '#FF4500' 
  }
};

export const textStyles: SxProps<Theme> = {
  color: '#333333', 
  fontWeight: 'bold'
};
