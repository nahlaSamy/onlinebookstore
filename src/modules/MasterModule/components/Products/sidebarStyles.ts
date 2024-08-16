// sidebarStyles.ts
import { SxProps, Theme } from '@mui/material/styles';

export const sidebarContainerStyles: SxProps<Theme> = {
  p: 2,
  bgcolor: 'background.default',
  height: '100vh',
  borderRight: '1px solid #E0E0E0',
};

export const sectionTitleStyles: SxProps<Theme> = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#FF6F61',
};

export const textFieldStyles: SxProps<Theme> = {
  '& .MuiInputLabel-root': {
    color: '#888888',
  },
  '& .MuiInputBase-root': {
    borderRadius: '4px',
    backgroundColor: '#FFFFFF',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#FF6F61',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF6F61',
    },
  },
};

export const accordionStyles: SxProps<Theme> = {
  bgcolor: 'background.default',
  '& .MuiAccordionSummary-root': {
    bgcolor: '#FFFFFF',
    borderBottom: '1px solid #E0E0E0',
  },
  '& .MuiAccordionDetails-root': {
    bgcolor: '#FFFFFF',
  },
};

export const dividerStyles: SxProps<Theme> = {
  my: 2,
  borderColor: '#E0E0E0',
};
